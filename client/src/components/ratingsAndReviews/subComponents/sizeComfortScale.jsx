import React from 'react';
import CSSLight from '../styles/ratingsAndReviewsLight.modules.css';

const SizeComfortScale = (props) => {
  return (
    <div className={CSSLight['sizeComfortScale']}>
      <div id={'sizeComfortScale-size'}>Size Scale</div>
      <div id={'sizeComfortScale-comfort'}>Comfort Scale</div>
    </div>
  );
}

export default SizeComfortScale;