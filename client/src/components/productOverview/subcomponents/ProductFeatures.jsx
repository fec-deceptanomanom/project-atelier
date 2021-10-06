import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

const ProductFeatures = ( props ) => {
  const id = 'product-overview-feature';
  if (props.info.product.features) {
    return (
      <div id={'product-overview-features-block'} className={CSSCommon['product-overview-features']}>
        {props.info.product.features.map((feature, idx) => (
          <h4 key={idx} id={`${id}-${idx + 1}`} >
            {/* <i className="fas fa-check"></i> {feature.feature + ': ' + feature.value} */}
            <i className="fas fa-check"></i> {`${(feature.value ? feature.value + " " : "")}${feature.feature}`}
          </h4>
        ))}
      </div>
    );
  } else {
    return (<h1>Loading...</h1>)
  }
}

export default ProductFeatures;