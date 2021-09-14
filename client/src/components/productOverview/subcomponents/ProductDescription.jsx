import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

const ProductDescription = ( props ) => {
  return (
    <div className={CSSCommon['product-overview-description']}>
      <h2>{props.info.product.slogan}</h2>
      <p>{props.info.product.description}</p>
    </div>
  );
}

export default ProductDescription;