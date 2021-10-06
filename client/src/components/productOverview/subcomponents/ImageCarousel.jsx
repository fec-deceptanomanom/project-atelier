import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

const ImageCarousel = ( props ) => {
  return (
    <div id={CSSCommon['img-carousel']}>
      {[1, 2, 3, 4, 5].map((slot, idx) => {
        return (<button key={idx} id={`test-button-${slot}`} className={CSSCommon['tile']}>
          {/** */}
        </button>);
      })}
      <button id={CSSCommon['test-button-down']} className={CSSCommon[`test-button-down`]}><i className="fas fa-chevron-down"></i></button>
    </div>
  );
}

export default ImageCarousel;