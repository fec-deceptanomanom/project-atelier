import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';
import CSSLight from '../styles/productOverviewLight.module.css';
import CSSDark from '../styles/productOverviewDark.module.css';

import { withClickTracker } from '../../../../lib/interactions.jsx';

const parentComponent = "Product Overview";

const $ = require('jquery');

const onAddClick = () => {
  let size = $('#product-size-selection').val();
  if (size === null) {
    alert('Please select a size');
  } else {
    console.log(`Adding size ${size} to bag!`)
  }
}

const AddToBag = (props) => {
  const id = 'add-to-bag-button';
  if (!props.outOfStock) {
    return (
      <button id={id} onClick={() => {
        onAddClick();
        props.clickTracker(id, parentComponent);
      }}>Add To Bag</button>
    );
  } else {
    return (
      <button id={id} disabled>Add To Bag</button>
    )
  }
}

export default withClickTracker(AddToBag);