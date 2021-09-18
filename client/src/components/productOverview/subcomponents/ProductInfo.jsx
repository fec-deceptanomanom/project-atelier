import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

import StyleThumbnailGrid from './StyleThumbnailGrid.jsx';

const getRoundedRating = function(ratings) {
  let ratingSum = 0;
  let ratingQuantity = 0;
  for (const [key, value] of Object.entries(ratings)) {
    ratingSum += (Number(key) * Number(value));
    ratingQuantity += Number(value);
  }
  return (Math.round((ratingSum / ratingQuantity) * 4) / 4).toFixed(2);
}

const getPriceElement = function(currentStyle) {
  if (currentStyle.sale_price) {
    return (<h3 id={'productinfo-price'}><strike>{' $' + currentStyle.original_price}</strike>{' $' + currentStyle.sale_price}</h3>);
  } else {
    return (<h3 id={'productinfo-price'}>{'$' + currentStyle.original_price}</h3>);
  }
}

const ProductInfo = ( props ) => {
  if (props.currentStyle) {
    return (
      <div className={CSSCommon['product-overview-info']}>
        <div className={CSSCommon['product-overview-info-top']}>
          <div className={CSSCommon['indented']}>
            <h5 id={'productinfo-star-rating'}>{`Stars: ${getRoundedRating(props.info.reviews.ratings)}`}</h5>
            <h3 id={'productinfo-category'}>{props.info.product.category}</h3>
            <h2 id={'productinfo-name'}>{props.info.product.name}</h2>
            {getPriceElement(props.currentStyle)}
            <h3 id={'productinfo-stylename'}>STYLE > {props.currentStyle.name}</h3>
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