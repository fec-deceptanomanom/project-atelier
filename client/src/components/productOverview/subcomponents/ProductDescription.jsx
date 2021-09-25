import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

import { withClickTracker } from '../../../../lib/interactions.jsx';

const parentComponent = "Product Overview";

let DescriptionSlogan = (props) => {
  const id = 'product-overview-description-slogan';
  return <h2 id={id} onClick={() => props.clickTracker(id, parentComponent)}>{props.slogan}</h2>
};
DescriptionSlogan = withClickTracker(DescriptionSlogan);

let DescriptionText = (props) => {
  const id = 'product-overview-description-text';
  return <p id={id} onClick={() => props.clickTracker(id, parentComponent)}>{props.text}</p>
};
DescriptionText = withClickTracker(DescriptionText);

const ProductDescription = ( props ) => {
  return (
    <div className={CSSCommon['product-overview-description']}>
      {/* <h2>{props.info.product.slogan}</h2> */}
      <DescriptionSlogan slogan={props.info.product.slogan}/>
      {/* <p>{props.info.product.description}</p> */}
      <DescriptionText text={props.info.product.description}/>
    </div>
  );
}

export default ProductDescription;