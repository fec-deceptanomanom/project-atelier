import React from 'react';
import Reviews from './reviews.jsx';
import CSSLight from '../styles/ratingsAndReviewsLight.modules.css';

const ReviewsList = (props) => {
 return (
   <div className={CSSLight['reviewList']}>
     <h4>xyz reviews, sort by relevance</h4>
     <Reviews />
     <button>More Reviews</button>
     <button>Add Review</button>
   </div>
 );
}

export default ReviewsList;