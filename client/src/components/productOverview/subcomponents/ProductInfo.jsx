import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

import StyleThumbnailGrid from './StyleThumbnailGrid.jsx';

const ProductInfo = ( props ) => {
  return (
    <div className={CSSCommon['product-overview-info']}>
      <h5>Reviews</h5>
      <h3>CATEGORY</h3>
      <h2>Product Name</h2>
      <h3>$749</h3>
      <h3>STYLE > SELECTED STYLE</h3>
      <StyleThumbnailGrid styles={props.styles} />
    </div>
  );
}

export default ProductInfo;