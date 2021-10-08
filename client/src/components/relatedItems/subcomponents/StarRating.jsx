import React from 'react';
import CSSLight from '.././relatedItemsLight.module.css';
import CSSDark from '.././relatedItemsDark.module.css';

const getRoundedRating = function(ratings) {
  let ratingSum = 0;
  let ratingQuantity = 0;
  for (const [key, value] of Object.entries(ratings)) {
    ratingSum += (Number(key) * Number(value));
    ratingQuantity += Number(value);
  }
  return (Math.round((ratingSum / ratingQuantity) * 4) / 4).toFixed(2);
}

const StarRatings = ( props ) => { //props = info.reviews
  // const id = `style-thumbnail-${props.idx}`;
  let ratingsCount = Object.keys(props.ratings).length; //<--- error hear.
  const roundedRating = getRoundedRating(props.ratings);
  return (
    <div id='related-card-stars'>
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
    </div>
  );
}

export default StarRatings;