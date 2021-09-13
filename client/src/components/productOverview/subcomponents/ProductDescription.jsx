import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

const ProductDescription = ( props ) => {
  return (
    <div className={CSSCommon['product-overview-description']}>
      <h2>{props.info.productInfo.slogan}</h2>
      <p>{props.info.productInfo.description}</p>
    </div>
  );
}

export default ProductDescription;