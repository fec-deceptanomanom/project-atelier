import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

import StyleThumbnailGrid from './StyleThumbnailGrid.jsx';
import ProductSelections from './ProductSelections.jsx';

import { withClickTracker } from '../../../../lib/interactions.jsx';

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

let ProductStarRating = (props) => {
  const id = 'productinfo-star-rating';
  return <h5
    id={id}
    onClick={() => props.clickTracker(id, parentComponent)}
    >
      {`Stars: ${getRoundedRating(props.ratings)}`}
  </h5>;
}
ProductStarRating = withClickTracker(ProductStarRating);

let ProductCategory = (props) => {
  const id = 'productinfo-category';
  return <h3 id={id} onClick={() => props.clickTracker(id, parentComponent)}>{props.category}</h3>
}
ProductCategory = withClickTracker(ProductCategory);

let ProductName = (props) => {
  const id = 'productinfo-name';
  return <h2 id={id} onClick={() => props.clickTracker(id, parentComponent)}>{props.name}</h2>
}
ProductName = withClickTracker(ProductName);

let ProductPrice = (props) => {
  const id = 'productinfo-price';
  const sale = props.currentStyle.sale_price !== null;
  const salePrice = props.currentStyle.sale_price;
  const regularPrice = props.currentStyle.original_price;

  return (
    <h3
      id={id}
      className={sale ? CSSCommon['onsale'] : ""}
      onClick={() => props.clickTracker(id, parentComponent)}
    >
      {/* {sale ? (<strike>{'$' + regularPrice}</strike>) '$' + salePrice : '$' + regularPrice} */}
      {sale ? <strike>{'$' + regularPrice}</strike> : '$' + regularPrice} {sale ? '$' + salePrice : ''}
    </h3>
  )
}
ProductPrice = withClickTracker(ProductPrice);

let ProductStyleName = (props) => {
  const id = 'productinfo-stylename';
  return <h3 id={id} onClick={() => props.clickTracker(id, parentComponent)}>STYLE > {props.styleName}</h3>
}
ProductStyleName = withClickTracker(ProductStyleName);

const ProductInfo = ( props ) => {
  if (props.currentStyle) {
    return (
      <div className={CSSCommon['product-overview-info']}>
        <div className={CSSCommon['product-overview-info-top']}>
          <div className={CSSCommon['indented']}>
            <ProductStarRating ratings={props.info.reviews.ratings}/>
            <ProductCategory category={props.info.product.category}/>
            <ProductName name={props.info.product.name}/>
            <ProductPrice currentStyle={props.currentStyle}/>
            <ProductStyleName styleName={props.currentStyle.name}/>
            <StyleThumbnailGrid styles={props.info.styles} onStyleClick={props.onStyleClick}/>
          </div>
        </div>
        <ProductSelections currentStyle={props.currentStyle}/>
      </div>
    );
  } else {
    return (<h3>Loading...</h3>)
  }

}

export default withClickTracker(ProductInfo);