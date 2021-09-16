import React from 'react';
import ComparisonModal from './ComparisonModal.jsx';

const RelatedCard = (props) => {

  const starButton = (
    <div>
      <button onClick={'display ComparisionModal'}></button>
    </div>
  );

  return (
    <div>
      <h2>I am the Related Product Card</h2>
      <button onClick={'render ComparisonModal '}></button>

      <img>Preview Image</img>

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