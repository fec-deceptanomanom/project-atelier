import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

const ProductFeatures = ( props ) => {
  const id = 'product-overview-feature';
  if (props.info.product.features) {
    return (
      <div id={'product-overview-features-block'} className={CSSCommon['product-overview-features']}>
        <ul>
          {props.info.product.features.map((feature, idx) => (
            <li key={idx} id={`${id}-${idx + 1}`} >
              {feature.feature + ': ' + feature.value}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (<h1>Loading...</h1>)
  }
}

export default ProductFeatures;