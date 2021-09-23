import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';
import CSSLight from '../styles/productOverviewLight.module.css';
import CSSDark from '../styles/productOverviewDark.module.css';

import SizeSelection from './SizeSelection.jsx';
import QuantitySelection from './QuantitySelection.jsx';

const $ = require('jquery');

class ProductSelections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizeSelected: false,
      currentSize: null
    };
    this.selectedSize = this.selectedSize.bind(this);
  }

  selectedSize() {
    let size = $('#product-size-selection').val();
    this.setState({
      ...this.state,
      sizeSelected: true,
      currentSize: size
    });
  }

  render() {
    return (
      <div className={CSSCommon['product-selections']}>
        <div id='dropdown-row'>
          <SizeSelection
            currentStyle={this.props.currentStyle}
            onSelect={this.selectedSize}
            sizeSelected={this.state.sizeSelected}
          />
          <QuantitySelection
            currentStyle={this.props.currentStyle}
            sizeSelected={this.state.sizeSelected}
            currentSize={this.state.currentSize}
          />
        </div>
        <div id='btn-row'>
          <button>Add to Bag</button>
          <button>[STAR]</button>
        </div>
      </div>
    );
  }
}

export default ProductSelections;