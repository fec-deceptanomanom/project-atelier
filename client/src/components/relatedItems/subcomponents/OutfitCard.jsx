import React from 'react';
import CSSLight from './../relatedItemsLight.module.css';

const OufitCard = (props) => {

  const XButton = (
    <div id='remove-outfit-container'>
      <button id='remove-outfit' onClick={'remove this card from carousel'}>X</button>
    </div>
  );

  return (
    <div id='outfit-card' className={CSSLight.outfitCard}>
      <h4 id='outfit-card-h4'>Outfit Card</h4>
      <p id='outfit-card-name' className={CSSLight.name}>name</p>
      <p id='outfit-card-category-key' className={CSSLight.category}>Department:    </p>
      <p id='outfit-card-category-value' className={CSSLight.categoryValue}>category</p>
      <img id='outfit-card-thumbnail' className={CSSLight.thumbnail} alt='Image not Found'></img>
      <ul id='outfit-card-list'>
        <li id='outfit-card-price'>Price: </li>
        <li id='outfit-card-stars'>Stars: </li>
      </ul>
    </div>
  )
}

export default OufitCard;