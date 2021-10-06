import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

const ImageCarousel = ( props ) => {
  return (
    <div id={CSSCommon['img-carousel']}>
      {/* <button id={'test-button'} className={CSSCommon['test-image-button']}></button>
      <button id={'test-button1'} className={CSSCommon['test-image-button-1']}></button> */}
      {[1, 2, 3, 4, 5].map((slot, idx) => {
        return (<button key={idx} id={`test-button-${slot}`} className={CSSCommon[`test-button-${slot}`]}>
          {/** */}
        </button>);
      })}
    </div>
  );
}


export default ImageCarousel;