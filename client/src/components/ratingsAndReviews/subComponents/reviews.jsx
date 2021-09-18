import React from 'react';
import CSSLight from '../styles/ratingsAndReviewsLight.modules.css';

const Reviews = (props) => {
  console.log('Reviews props, ' , props)
  return (
    <div>
      <div className="reviewsDiv">
      {props.reviews.map((review) => {
        return (<div className={CSSLight["review"]}>
          <div key="rating">{review.rating}</div>
          <div key="username">{review.reviewer_name}</div>
          <div key="date">{review.date}</div>
          <div key="summary">{review.summary}</div>
          <div key="body">{review.body}</div>
          <div key="helpfulness">Helpful? {review.helpfulness}</div>
        </div>)
      })}
      </div>
    </div>
  );
}

export default Reviews;