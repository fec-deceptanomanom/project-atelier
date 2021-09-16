import React from 'react';
import CSSLight from '.././relatedItemsLight.module.css';
import CSSDark from '.././relatedItemsDark.module.css';

import ComparisonModal from './ComparisonModal.jsx';

const RelatedCard = (props) => {

  const starButton = (
    <div>
      <button onClick={() => {}} value='Star Button'>Star Button</button>
    </div>
  );

  return (
    <div className={CSSLight.relatedCard}>
      <h2>I am a Related Product Card</h2>
      {starButton}
      <h3>Preview Image</h3>

      <ul>
        <li>Product Category</li>
        <li>Product Name</li>
        <li>Price</li>
        <li>Star Rating</li>
      </ul>
    </div>
  )
}


export default RelatedCard;