import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

import StyleThumbnailGrid from './StyleThumbnailGrid.jsx';

const ProductInfo = ( props ) => {
  // props.currentStyle.name + ' ' +
  if (props.currentStyle) {
    console.log(props.currentStyle);
    return (
      <div className={CSSCommon['product-overview-info']}>
        <div className={CSSCommon['product-overview-info-top']}>
          <div className={CSSCommon['indented']}>
            <h5>Reviews</h5>
            <h3>{props.info.productInfo.category}</h3>
            <h2>{props.info.productInfo.name}</h2>
            <h3>{'$' + props.info.productInfo.default_price}</h3>
            <h3>STYLE > {props.currentStyle.name}</h3>
            <StyleThumbnailGrid styles={props.info.styleInfo} />
          </div>
          <div className={CSSCommon['deadspace']}></div>
        </div>
        <div id='dropdown-row'>
          <select defaultValue="default">
            <option value="default" disabled hidden>Select size</option>
            {Object.keys(props.currentStyle.skus).map(sku => (
              <option key={Object.keys(props.currentStyle.skus).indexOf(sku)}>{props.currentStyle.skus[sku].size}</option>
            ))}
          </select>
          <select defaultValue="default">
            <option value="default" disabled hidden>Select quantity</option>
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
  } else {
    return (<h3>Loading...</h3>)
  }

}

export default ProductInfo;