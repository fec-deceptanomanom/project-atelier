import React from 'react';

const PhotoZoom = (props) => {
  const CSSStyle = props.CSSStyle;
  return (
    <div id="zoomed-in-photo-div" className={CSSStyle.modal} onClick={props.closeZoom}>
      <div id="zoomed-in-answer-photo" className={[CSSStyle['modal-content'], CSSStyle['photo-zoom']].join(' ')}>
      <img id="answer-photo-zoom" className={CSSStyle['zoom-photo']} src={props.photo}></img>
      </div>
    </div>
  )
};

export default PhotoZoom;