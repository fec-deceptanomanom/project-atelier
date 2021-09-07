import React from 'react';
import CSSLight from './styles/productOverviewLight.module.css';
import CSSDark from './styles/productOverviewDark.module.css';

import StyleThumbnailGrid from './subcomponents/StyleThumbnailGrid.jsx';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkmode: false,
      styles: [
        "Alpha",
        "Beta",
        "Gamma"
      ]
    };
  }

  render() {
    return (
      <div id="ProductOverview">
        <h1 className={this.state.darkmode ? CSSLight.testBanner : CSSDark.testBanner}>Product Overview</h1>
        <StyleThumbnailGrid styles={this.state.styles}/>
      </div>
    );
  }
}

export default ProductOverview;
