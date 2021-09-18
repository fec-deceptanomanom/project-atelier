import React from 'react';
import Reviews from './reviews.jsx';
import CSSLight from '../styles/ratingsAndReviewsLight.modules.css';

const ReviewsList = (props) => {
  // console.log('Reviewlist Props:', props)
 return (
   <div className={CSSLight['reviewList']}>
     <h4>{props.data.count} reviews</h4>
     <Reviews reviews={props.data.results} />
     <button>More Reviews</button>
     <button>Add Review</button>
   </div>
 );
}

export default ReviewsList;