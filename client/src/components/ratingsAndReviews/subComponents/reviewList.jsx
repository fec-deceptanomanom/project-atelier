import React from 'react';
import Review from './reviews.jsx';
import CSSLight from '../styles/ratingsAndReviewsLight.modules.css';

const ReviewsList = (props) => {
  // console.log('Reviewlist Props:', props.data);
  return (
    <div className={CSSLight['reviewList']}>
      <h4 id={"reviewslist-count"}>{props.data.count} reviews</h4>
      <div className="reviewsDiv">
        {props.data.results.map((review, idx) => {
          return <Review key={idx} review={review} />
        })}
      </div>
      <button id={"reviewslist-more-reviews-button"}>More Reviews</button>
      <button id={"reviewslist-add-review-button"}>Add Review</button>
    </div>
  );
}

export default ReviewsList;