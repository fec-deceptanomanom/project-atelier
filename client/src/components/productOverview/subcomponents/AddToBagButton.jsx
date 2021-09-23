import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';
import CSSLight from '../styles/productOverviewLight.module.css';
import CSSDark from '../styles/productOverviewDark.module.css';

const AddToBag = (props) => {
  if (!props.outOfStock) {
    return (
      <button>Add To Bag</button>
    );
  } else {
    return (
      <button disabled>Add To Bag</button>
    )
  }
}

export default AddToBag;