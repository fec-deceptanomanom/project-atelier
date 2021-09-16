import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

const ProductFeatures = ( props ) => {
  if (props.info.product.features) {
    return (
      <div className={CSSCommon['product-overview-features']}>
        <ul>
          {props.info.product.features.map(feature => (
            <li key={props.info.product.features.indexOf(feature)}>{feature.feature + ': ' + feature.value}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (<h1>Loading...</h1>)
  }
}

export default ProductFeatures;