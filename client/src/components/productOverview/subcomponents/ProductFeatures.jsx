import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

const ProductFeatures = ( props ) => {
  if (props.info.product.features) {
    return (
      <div className={CSSCommon['product-overview-features']}>
        <h1>{JSON.stringify(props.info.product.features)}</h1>
        {props.info.product.features.map(feature => (
          <p>{feature.feature + ': ' + feature.value}</p>
        ))}
      </div>
    );
  } else {
    return (<h1>Loading...</h1>)
  }
}

export default ProductFeatures;