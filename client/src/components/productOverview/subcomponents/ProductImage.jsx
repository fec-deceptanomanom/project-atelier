import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

import { withClickTracker } from '../../../../lib/interactions.jsx';

const ProductImage = ( props ) => {
  if (props.currentStyle) {
    let imageElement;
    if (props.currentStyle.photos[0] && props.currentStyle.photos[0].url !== null) {
      imageElement = (<img className={CSSCommon['main-img']} src={props.currentStyle.photos[0].url} alt={"404"}></img>);
    } else {
      imageElement = (<p>Image not found</p>);
    }
    return (
      <div
        className={CSSCommon['product-overview-image']}
        onClick={() => props.clickTracker('product-overview-image', 'Product Overview', 'now!')}
      >
        {imageElement}
      </div>
    );
  } else {
    return (<h1>Loading...</h1>)
  }
}

export default withClickTracker(ProductImage);