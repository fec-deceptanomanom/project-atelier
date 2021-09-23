import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';
import CSSLight from '../styles/productOverviewLight.module.css';
import CSSDark from '../styles/productOverviewDark.module.css';

const $ = require('jquery');

const SizeSelection = (props) => {
  return (
    <select id={'product-size-selection'} defaultValue="default" onChange={props.onSelect}>
      <option value="default" disabled hidden>Select size</option>
      {Object.keys(props.currentStyle.skus).map((sku, idx) => (
        <option key={idx}>{props.currentStyle.skus[sku].size}</option>
      ))}
    </select>
  );
}

const QuantitySelection = (props) => {
  if (props.sizeSelected && props.currentSize !== null) {
    // Get the sku of the item related to the size selected
    let sku = Object.keys(props.currentStyle.skus).filter((item) => props.currentStyle.skus[item].size === props.currentSize)[0];

    // Get the number of items in stock or 15, whichever is smaller
    let quantityMax = Math.min(props.currentStyle.skus[sku].quantity, 15);

    // Make an array of integers from 2 to the quantityMax
    let quantityRange = [...Array(quantityMax + 1).keys()];
    quantityRange.splice(0, 2);

    // Build the options list based on the quantityRange
    return (
      <select id={'product-quantity-selection'} defaultValue="default">
        <option value="default">1</option>
        {quantityRange.map((value, idx) => (
          <option key={idx}>{value}</option>
        ))}
      </select>
    );
  } else {
    return (
      <select id={'product-quantity-selection'} defaultValue="default" disabled>
        <option value="default" disabled>-</option>
      </select>
    );
  }
}

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