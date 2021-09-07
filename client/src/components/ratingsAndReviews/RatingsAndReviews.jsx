import React from 'react';
import CSSLight from './ratingsAndReviewsLight.modules.css';
import CSSDark from './ratingsAndReviewsDark.modules.css';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="RatingsAndReviews">
        <h1 className={CSSLight.testBanner}>Testing from Ratings and Reviews</h1>
      </div>
    );
  }
}

export default RatingsAndReviews;
