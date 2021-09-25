import React from 'react';
import CSSLight from './../relatedItemsLight.module.css';

const OufitCard = (props) => {

  const XButton = (
    <div>
      <button onClick={'remove this card from carousel'}>X</button>
    </div>
  );

  return (
    <div id='outfit-card' className={CSSLight.outfitCard}>
      <h4>Outfit Card</h4>
      <p className={CSSLight.name}>name</p>
      <p className={CSSLight.category}>Department:    </p>
      <p className={CSSLight.categoryValue}>category</p>
      <img className={CSSLight.thumbnail} alt='Image not Found'></img>
      <ul>
        <li>Price: </li>
        <li>Stars: </li>
      </ul>
    </div>
  )
}

export default OufitCard;