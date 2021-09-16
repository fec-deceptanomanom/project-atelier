import React from 'react';

const OufitCard = (props) => {

  const XButton = (
    <div>
      <button onClick={'remove this card from carousel'}>X</button>
    </div>
  );

  return (
    <div>
      <h2>I am the Your Outfit Card</h2>
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

export default OufitCard;