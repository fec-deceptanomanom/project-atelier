import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

const ImageCarousel = ( props ) => {
  let numberOfPhotos = Object.keys(props.images).length;
  return (
    <div id={CSSCommon['img-carousel']}>
      {[0, 1, 2, 3, 4].map((slot, idx) => {
        return (<button key={idx} id={`test-button-${slot}`} className={CSSCommon['tile']} onClick={() => props.setImage(slot)}>
          <img id={`tile-img-${idx}`} className={CSSCommon['tile-img']} src={props.images[slot.toString()].thumbnail_url}></img>
        </button>);
      })}
      <button id={CSSCommon['test-button-down']} className={CSSCommon[`test-button-down`]}><i className="fas fa-chevron-down"></i></button>
    </div>
  );
}

export default ImageCarousel;