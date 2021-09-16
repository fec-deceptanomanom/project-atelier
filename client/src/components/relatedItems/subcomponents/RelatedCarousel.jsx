import React from 'react';
import CSSLight from './../relatedItemsLight.module.css';
import RelatedCard from './RelatedCard.jsx';
import LeftButton from './LeftButton.jsx';
import RightButton from './RightButton.jsx';

const RelatedCarousel = (props) => {
  const cardList = []; //will be the result of a map <RelatedCard
  return (
    <div className={CSSLight.relatedCarousel}>
      <h2>I am the Related Carousel</h2>
      <div>
        <LeftButton />
        {cardList}
        <RightButton />
      </div>
    </div>
  );
};



export default RelatedCarousel;