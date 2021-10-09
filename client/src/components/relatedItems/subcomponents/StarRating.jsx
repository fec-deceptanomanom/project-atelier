import React from 'react';
// import CSSCommon from './client/src/components/productOverview/styles/productOverview.module.css';
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
  // console.log('StarRatings props', props);
  let ratingsCount = Object.keys(props).length;
  // console.log('StarRatings ratingsCount', ratingsCount);
  const roundedRating = getRoundedRating(props);
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
    </div>
  );
}

export default StarRatings;