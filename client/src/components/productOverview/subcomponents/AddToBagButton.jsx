import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';
import CSSLight from '../styles/productOverviewLight.module.css';
import CSSDark from '../styles/productOverviewDark.module.css';

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
  if (!props.outOfStock) {
    return (
      <button onClick={onAddClick}>Add To Bag</button>
    );
  } else {
    return (
      <button disabled>Add To Bag</button>
    )
  }
}

export default AddToBag;