import React from 'react';
import CSSLight from './productOverviewLight.module.css';
import CSSDark from './productOverviewDark.module.css';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="ProductOverview">
        <h1 className={CSSLight.testBanner}>Testing from Product Overview</h1>
      </div>
    );
  }
}

export default ProductOverview;
