import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

let DescriptionSlogan = (props) => {
  return
};

let DescriptionText = (props) => {
  return <p id={'product-overview-description-text'}>{props.text}</p>
};

const ProductDescription = ( props ) => {
  return (
    <div id={'product-overview-description'} className={CSSCommon['product-overview-description']}>
      <h2 id={'product-overview-description-slogan'}>{props.info.product.slogan}</h2>
      <DescriptionText text={props.info.product.description}/>
    </div>
  );
}

export default ProductDescription;