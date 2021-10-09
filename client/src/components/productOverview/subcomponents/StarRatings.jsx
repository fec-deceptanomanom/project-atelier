import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';
import CSSLight from '../styles/productOverviewLight.module.css';
import CSSDark from '../styles/productOverviewDark.module.css';

// For the reviews link
import RatingsAndReviews_CSSLight from '../../ratingsAndReviews/styles/ratingsAndReviewsLight.modules.css';

const getRoundedRating = function(ratings) {
  let ratingSum = 0;
  let ratingQuantity = 0;
  for (const [key, value] of Object.entries(ratings)) {
    ratingSum += (Number(key) * Number(value));
    ratingQuantity += Number(value);
  }
  return (Math.round((ratingSum / ratingQuantity) * 4) / 4).toFixed(2);
}

const StarRatings = ( props ) => {
  const id = `style-thumbnail-${props.idx}`;
  let ratingsCount = Object.keys(props.ratings).length;
  const roundedRating = getRoundedRating(props.ratings);
  return (
    <div id={CSSCommon['rating-stars']}>
      {[1, 2, 3, 4, 5].map((value, idx) => {
        if (roundedRating >= value) {
          return (<i key={idx} className="fas fa-star"></i>);
        } else if (roundedRating >= value - 0.5) {
          return (<i key={idx} className="fas fa-star-half-alt"></i>);
        } else {
          return (<i key={idx} className="far fa-star"></i>)
        }
      })}
      <a id={CSSCommon['reviews-link']} href={"#" + RatingsAndReviews_CSSLight['ratingsAndReviews']}>See all {props.reviewCount} reviews</a>
      {/* <img src={'/client/dist/resources/star-one-quarter-black.png'} /> */}
    </div>
  );
}

export default StarRatings;