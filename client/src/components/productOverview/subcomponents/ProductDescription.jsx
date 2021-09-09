import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

const ProductDescription = ( props ) => {
  return (
    <div className={CSSCommon['product-overview-description']}>
      <h2>[Slogan]</h2>
      <h1>[Description]</h1>
    </div>
  );
}

export default ProductDescription;