import React from 'react';
import CSSLight from '../styles/ratingsAndReviewsLight.modules.css';

const StarRatings = (props) => {
  console.log('Star rating props, ', props)
  return (
    <div>
      <div className={CSSLight['starRatings']}>{getAvg(props)} stars</div>
      <div className={CSSLight['ratingBars']}>Rating bars here</div>
    </div>
  );
}

function getAvg(props){
  let tempSum = 0;
  let data = Object.keys(props.data);
  let divisor = 0;
  data.forEach((key) => {
    tempSum += key * props.data[key];
    divisor += parseInt(props.data[key]);
    console.log(divisor)
  })

  return Math.round((tempSum / divisor) * 10) / 10;
}

export default StarRatings;