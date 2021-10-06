import React from 'react';
import CSSCommon from './styles/productOverview.module.css';
import CSSLight from './styles/productOverviewLight.module.css';
import CSSDark from './styles/productOverviewDark.module.css';

import { withClickTracker } from '../../../lib/interactions.jsx';

import ProductImage from './subcomponents/ProductImage.jsx';
import ProductInfo from './subcomponents/ProductInfo.jsx';
import ProductDescription from './subcomponents/ProductDescription.jsx';
import ProductFeatures from './subcomponents/ProductFeatures.jsx';

const componentName = "Product Overview";

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: null
    };
    this.setDefaultStyle = this.setDefaultStyle.bind(this);
  }

  setDefaultStyle() {
    if (this.props.data.styles.results) {
      let defaultStyle = this.props.data.styles.results.filter(style => style['default?'])[0];
      this.setState({
        ...this.state,
        currentStyle: defaultStyle
      });
      this.setNewStyle = this.setNewStyle.bind(this);
    }
  }

  setNewStyle(style) {
    this.setState({
      ...this.state,
      currentStyle: style
    });
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
    if (this.state.currentStyle) {
      return (
        <div
          id={'product-overview-parent-space'}
          className={CSSCommon['product-overview']}
          onClick={(e) => {this.props.clickTracker(e.target.attributes.id.value, componentName)}}
        >
          <div id={'product-overview-top'} className={CSSCommon['product-overview-top']} >
            <ProductImage info={this.props.data} currentStyle={this.state.currentStyle}/>
            <ProductInfo info={this.props.data} currentStyle={this.state.currentStyle} onStyleClick={this.setNewStyle}/>
          </div>
          <div id={'product-overview-bottom'} className={CSSCommon['product-overview-bottom']}>
            <ProductDescription info={this.props.data}/>
            <div id={'vertical-bar'} className={CSSCommon.vl}></div>
            <ProductFeatures info={this.props.data}/>
          </div>
        </div>
      );
    } else {
      return (
       <p>Loading...</p>
      );
    }
  }
}

export default withClickTracker(ProductOverview);
