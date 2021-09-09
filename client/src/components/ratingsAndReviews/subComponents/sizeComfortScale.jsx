import React from 'react';
import CSSLight from '../styles/ratingsAndReviewsLight.modules.css';

const SizeComfortScale = (props) => {
  return (
    <div className={CSSLight['sizeComfortScale']}>
      <div>Size Scale</div>
      <div>Comfort Scale</div>
    </div>
  );
}

export default SizeComfortScale;