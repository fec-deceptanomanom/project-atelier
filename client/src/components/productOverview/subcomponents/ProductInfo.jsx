import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

import StyleThumbnailGrid from './StyleThumbnailGrid.jsx';
import ProductSelections from './ProductSelections.jsx';

const parentComponent = "Product Overview";

const getRoundedRating = function(ratings) {
  let ratingSum = 0;
  let ratingQuantity = 0;
  for (const [key, value] of Object.entries(ratings)) {
    ratingSum += (Number(key) * Number(value));
    ratingQuantity += Number(value);
  }
  return (Math.round((ratingSum / ratingQuantity) * 4) / 4).toFixed(2);
}

let ProductPrice = (props) => {
  const id = 'productinfo-price';
  const sale = props.currentStyle.sale_price !== null;
  const salePrice = props.currentStyle.sale_price;
  const regularPrice = props.currentStyle.original_price;

  return (
    <h3 id={id} className={sale ? CSSCommon['onsale'] : ""}>
      {sale ? <strike>{'$' + regularPrice}</strike> : '$' + regularPrice}{sale ? ' $' + salePrice : ''}
    </h3>
  )
}

const ProductInfo = ( props ) => {
  if (props.currentStyle) {
    return (
      <div id={'product-overview-info'} className={CSSCommon['product-overview-info']}>
        <div id={'product-overview-info-top'} className={CSSCommon['product-overview-info-top']}>
          <h5 id={'productinfo-star-rating'}>{`Stars: ${getRoundedRating(props.info.reviews.ratings)}`}<i className="fas fa-star"></i></h5>
          <h3 id={'productinfo-category'}>{props.info.product.category}</h3>
          <h2 id={'productinfo-name'}>{props.info.product.name}</h2>
          <ProductPrice currentStyle={props.currentStyle}/>
          <h3 id={'productinfo-stylename'}>STYLE > {props.currentStyle.name}</h3>
          <StyleThumbnailGrid styles={props.info.styles} onStyleClick={props.onStyleClick} currentStyle={props.currentStyle}/>
        </div>
        <ProductSelections currentStyle={props.currentStyle}/>
      </div>
    );
  } else {
    return (<h3>Loading...</h3>)
  }

}

export default ProductInfo;
export { ProductPrice };