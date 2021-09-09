import React from 'react';
import CSSLight from '../styles/ratingsAndReviewsLight.modules.css';

const StarRatings = (props) => {
 return (
   <div>
  <div className={CSSLight['starRatings']}>Star Ratings Here</div>
  <div className={CSSLight['ratingBars']}>Rating bars here</div>
  </div>
 );
}

export default StarRatings;