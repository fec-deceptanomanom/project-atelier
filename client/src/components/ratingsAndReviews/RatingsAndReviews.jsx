import React from 'react';
import CSSLight from './styles/ratingsAndReviewsLight.modules.css';
import CSSDark from './styles/ratingsAndReviewsDark.modules.css';
import ReviewsList from './subComponents/reviewList.jsx';
import StarRatings from './subComponents/starRatings.jsx';
import SizeComfortScale from './subComponents/sizeComfortScale.jsx';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };
  }

  render() {
    //add if statement to switch between light & dark
    return (
      <div id={CSSLight['ratingsAndReviews']} className={CSSLight['ratings-reviews']}>
        <div className={CSSLight['ratingsAndScale']}>
          <StarRatings />
          <SizeComfortScale />
        </div>
        <div className={CSSLight['reviewsList']}>
          <ReviewsList />
        </div>
      </div>
    )
  }
}

export default RatingsAndReviews;
