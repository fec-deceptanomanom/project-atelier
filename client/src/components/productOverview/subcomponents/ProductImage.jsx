import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

const ProductImage = ( props ) => {
  if (props.currentStyle) {
    return (
      <div className={CSSCommon['product-overview-image']}>
        <img src={props.currentStyle.photos[0].url} height='400'></img>
      </div>
    );
  } else {
    return (<h1>Loading...</h1>)
  }
}

export default ProductImage;