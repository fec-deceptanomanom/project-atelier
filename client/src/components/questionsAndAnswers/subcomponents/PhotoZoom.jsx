import React from 'react';

const PhotoZoom = (props) => {
  const CSSStyle = props.CSSStyle;
  return (
    <div id="zoomed-in-answer-photo" className={CSSStyle['modal']} onClick={props.closeZoom}>
      <img id="answer-photo-zoom" src={props.photo}></img>
    </div>
  )
};

export default PhotoZoom;