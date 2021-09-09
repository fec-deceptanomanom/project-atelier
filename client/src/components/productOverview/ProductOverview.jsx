import React from 'react';
import CSSCommon from './styles/productOverview.module.css';
// import CSSLight from './styles/productOverviewLight.module.css';
// import CSSDark from './styles/productOverviewDark.module.css';

import ProductImage from './subcomponents/ProductImage.jsx';
import ProductInfo from './subcomponents/ProductInfo.jsx';
import ProductDescription from './subcomponents/ProductDescription.jsx';
import ProductFeatures from './subcomponents/ProductFeatures.jsx';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkmode: false,
      styles: [
        "[STYLE A]",
        "[STYLE B]",
        "[STYLE C]"
      ]
    };
  }

  render() {
    return (
      <div id={CSSCommon['ProductOverview']} className={CSSCommon['product-overview']}>
        {/* <h1 className={this.state.darkmode ? CSSLight.testBanner : CSSDark.testBanner}>Product Overview</h1> */}
        <div className={CSSCommon['product-overview-top']}>
          <ProductImage />
          <ProductInfo styles={this.state.styles}/>
        </div>
        <div className={CSSCommon['product-overview-bottom']}>
          <ProductDescription />
          <div className={CSSCommon.vl}></div>
          <ProductFeatures />
        </div>
      </div>
    );
  }
}

export default ProductOverview;
