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
      starRatings: this.props.reviewsInfo.ratings,
      recommendedNum: this.props.reviewsInfo.recommended,
      characteristics: this.props.reviewsInfo.characteristics,
    };
  }



  render() {
    console.log(this.props)
    //add if statement to switch between light & dark
    return (
      <div id={CSSLight['ratingsAndReviews']} className={CSSLight['ratings-reviews']}>
        <div className={CSSLight['ratingsAndScale']}>
          <StarRatings data={this.state.starRatings} />
          <SizeComfortScale />
        </div>
        <div className={CSSLight['reviewsList']}>
          <ReviewsList data={this.props.reviewList}/>
        </div>
      </div>
    )
  }
}

export default RatingsAndReviews;
