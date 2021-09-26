import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';
import CSSLight from '../styles/productOverviewLight.module.css';
import CSSDark from '../styles/productOverviewDark.module.css';

import SizeSelection from './SizeSelection.jsx';
import QuantitySelection from './QuantitySelection.jsx';
import AddToBagButton from './AddToBagButton.jsx';

const $ = require('jquery');

class ProductSelections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizeSelected: false,
      currentSize: null,
      outOfStock: false
    };
    this.selectedSize = this.selectedSize.bind(this);
  }

  componentDidMount() {
    let availableItems = Object.keys(this.props.currentStyle.skus).filter((sku) => this.props.currentStyle.skus[sku].quantity > 0);
    if (availableItems.length === 0) {
      this.setState({
        ...this.state,
        outOfStock: true
      });
    }
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
            outOfStock={this.state.outOfStock}
          />
          <QuantitySelection
            currentStyle={this.props.currentStyle}
            sizeSelected={this.state.sizeSelected}
            currentSize={this.state.currentSize}
          />
        </div>
        <div id='btn-row'>
          <AddToBagButton outOfStock={this.state.outOfStock}/>
          <button id={'star-button'}>[STAR]</button>
        </div>
      </div>
    );
  }
}

export default ProductSelections;