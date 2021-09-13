import React from 'react';
import CSSCommon from './styles/productOverview.module.css';
import CSSLight from './styles/productOverviewLight.module.css';
import CSSDark from './styles/productOverviewDark.module.css';

import ProductImage from './subcomponents/ProductImage.jsx';
import ProductInfo from './subcomponents/ProductInfo.jsx';
import ProductDescription from './subcomponents/ProductDescription.jsx';
import ProductFeatures from './subcomponents/ProductFeatures.jsx';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: null
    };
    this.setDefaultStyle = this.setDefaultStyle.bind(this);
  }

  setDefaultStyle() {
    if (this.props.data.styleInfo.results) {
      let defaultStyle = this.props.data.styleInfo.results.filter(style => style['default?'])[0];
      this.setState({
        ...this.state,
        currentStyle: defaultStyle
      });
    }
  }

  componentDidMount() {
    this.setDefaultStyle();
  }

  componentDidUpdate() {
    if (this.state.currentStyle === null) {
      this.setDefaultStyle();
    }
  }

  render() {
    return (
      <div id={CSSCommon['ProductOverview']} className={CSSCommon['product-overview']}>
        <div className={CSSCommon['product-overview-top']}>
          <ProductImage info={this.props.data} currentStyle={this.state.currentStyle}/>
          <ProductInfo info={this.props.data} currentStyle={this.state.currentStyle}/>
        </div>
        <div className={CSSCommon['product-overview-bottom']}>
          <ProductDescription info={this.props.data}/>
          <div className={CSSCommon.vl}></div>
          <ProductFeatures info={this.props.data}/>
        </div>
      </div>
    );
  }
}

export default ProductOverview;
