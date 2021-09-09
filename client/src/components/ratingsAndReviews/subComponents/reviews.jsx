import React from 'react';
import CSSLight from '../styles/ratingsAndReviewsLight.modules.css';

const Reviews = (props) => {
  return (
    <div>
      <div className={CSSLight['review']}>This is a review.</div>
      <div className={CSSLight['review']}>This is a review.</div>
    </div>
  );
}

export default Reviews;