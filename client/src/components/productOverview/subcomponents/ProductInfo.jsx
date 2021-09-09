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
      <div id='dropdown-row'>
        <select defaultValue="default">
          <option value="default" disabled hidden>Choose size</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
        </select>
        <select defaultValue="default">
          <option value="default" disabled hidden>Choose quantity</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div id='btn-row'>
        <button>Add to Bag</button>
        <button>[STAR]</button>
      </div>
    </div>
  );
}

export default ProductInfo;