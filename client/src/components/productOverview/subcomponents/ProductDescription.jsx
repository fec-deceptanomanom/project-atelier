import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

const ProductDescription = ( props ) => {
  return (
    <div id={'product-overview-description'} className={CSSCommon['product-overview-description']}>
      <h2 id={'product-overview-description-slogan'}>{props.info.product.slogan}</h2>
      <p id={'product-overview-description-text'}>{props.info.product.description}</p>
    </div>
  );
}

export default ProductDescription;