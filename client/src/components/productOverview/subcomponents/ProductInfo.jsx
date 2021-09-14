import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

import StyleThumbnailGrid from './StyleThumbnailGrid.jsx';

const ProductInfo = ( props ) => {
  // props.currentStyle.name + ' ' +
  if (props.currentStyle) {
    let priceElement;
    if (props.currentStyle.sale_price) {
      priceElement = (<h3><strike>{' $' + props.currentStyle.original_price}</strike>{' $' + props.currentStyle.sale_price}</h3>)
    } else {
      priceElement = (<h3>{' $' + props.currentStyle.original_price}</h3>)
    }

    return (
      <div className={CSSCommon['product-overview-info']}>
        <div className={CSSCommon['product-overview-info-top']}>
          <div className={CSSCommon['indented']}>
            <h5>Reviews</h5>
            <h3>{props.info.product.category}</h3>
            <h2>{props.info.product.name}</h2>
            {priceElement}
            <h3>STYLE > {props.currentStyle.name}</h3>
            <StyleThumbnailGrid styles={props.info.styles} onStyleClick={props.onStyleClick}/>
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