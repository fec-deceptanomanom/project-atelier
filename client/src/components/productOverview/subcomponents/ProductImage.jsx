import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

const ProductImage = ( props ) => {
  return (
    <div className={CSSCommon['product-overview-image']}>
      <h1>[Image]</h1>
    </div>
  );
}

export default ProductImage;