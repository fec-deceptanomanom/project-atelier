import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';
import CSSLight from '../styles/productOverviewLight.module.css';
import CSSDark from '../styles/productOverviewDark.module.css';

const SizeSelection = (props) => {
  if (!props.outOfStock) {
    let availableItems = Object.keys(props.currentStyle.skus).filter((sku) => props.currentStyle.skus[sku].quantity > 0);
    return (
      <select id={'product-size-selection'} defaultValue="default" onChange={props.onSelect}>
        <option value="default" disabled hidden>Select size</option>
        {availableItems.map((sku, idx) => (
          <option key={idx}>{props.currentStyle.skus[sku].size}</option>
        ))}
      </select>
    );
  } else {
    return (
      <select id={'product-size-selection'} defaultValue="default" disabled>
        <option value="default">OUT OF STOCK</option>
      </select>
    );
  }
};

export default SizeSelection;