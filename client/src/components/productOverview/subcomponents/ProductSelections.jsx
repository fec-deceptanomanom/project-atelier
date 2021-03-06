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
      <div id={'product-selections'} className={CSSCommon['product-selections']}>
        <div id={'product-selections-dropdowns'} className={CSSCommon['product-selections-dropdowns']}>
          <SizeSelection
            currentStyle={this.props.currentStyle}
            onSelect={this.selectedSize}
            outOfStock={this.state.outOfStock}
          />
          <QuantitySelection
            currentStyle={this.props.currentStyle}
            sizeSelected={this.state.sizeSelected}
            currentSize={this.state.currentSize}
          />
        </div>
        <div id={'product-selections-buttons'} className={CSSCommon['product-selections-buttons']}>
          <AddToBagButton outOfStock={this.state.outOfStock}/>
          <button id={'star-button'} className={CSSCommon['star-button']}>
            <i className="fas fa-star"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default ProductSelections;