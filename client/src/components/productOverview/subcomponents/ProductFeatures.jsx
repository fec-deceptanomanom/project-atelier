import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

import { withClickTracker } from '../../../../lib/interactions.jsx';

const parentComponent = "Product Overview";

const ProductFeatures = ( props ) => {
  const id = 'product-overview-feature';
  if (props.info.product.features) {
    return (
      <div className={CSSCommon['product-overview-features']}>
        <ul>
          {props.info.product.features.map((feature, idx) => (
            <li
              key={idx}
              id={`${id}-${idx + 1}`}
              onClick={() => props.clickTracker(`${id}-${idx + 1}`, parentComponent)}
            >
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

export default withClickTracker(ProductFeatures);