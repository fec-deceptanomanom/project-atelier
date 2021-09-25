import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';
import CSSLight from '../styles/productOverviewLight.module.css';
import CSSDark from '../styles/productOverviewDark.module.css';

import { withClickTracker } from '../../../../lib/interactions.jsx';

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
      <select id={'product-quantity-selection'}
        defaultValue="default"
        onChange={() => props.clickTracker('product-quantity-selection', 'Product Overview')}
      >
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
};

export default withClickTracker(QuantitySelection);