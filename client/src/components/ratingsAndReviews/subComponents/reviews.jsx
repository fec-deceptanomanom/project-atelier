import React from 'react';
import CSSLight from '../styles/ratingsAndReviewsLight.modules.css';

const Review = (props) => {
  // console.log('Reviews props, ' , props);
  return (
    <div className={CSSLight["review"]}>
      <div id={'review-rating'} key="rating">{props.review.rating}</div>
      <div id={'review-username'} key="username">{props.review.reviewer_name}</div>
      <div id={'review-date'} key="date">{props.review.date}</div>
      <div id={'review-summary'} key="summary">{props.review.summary}</div>
      <div id={'review-body'} key="body">{props.review.body}</div>
      <div id={'review-helpfulness'} key="helpfulness">Helpful? {props.review.helpfulness}</div>
    </div>
  );
}

export default Review;