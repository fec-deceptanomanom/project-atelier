import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

let DescriptionSlogan = (props) => {
  return <h2 id={'product-overview-description-slogan'}>{props.slogan}</h2>
};

let DescriptionText = (props) => {
  return <p id={'product-overview-description-text'}>{props.text}</p>
};

const ProductDescription = ( props ) => {
  return (
    <div id={'product-overview-description'} className={CSSCommon['product-overview-description']}>
      <DescriptionSlogan slogan={props.info.product.slogan}/>
      <DescriptionText text={props.info.product.description}/>
    </div>
  );
}

export default ProductDescription;