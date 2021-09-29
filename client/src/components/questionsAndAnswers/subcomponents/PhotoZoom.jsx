import React from 'react';

const PhotoZoom = (props) => {
  const CSSStyle = props.CSSStyle;
  return (
    <div id="zoomed-in-answer-photo" className={[CSSStyle.modal, CSSStyle['photo-zoom']].join(' ')} onClick={props.closeZoom}>
      <img id="answer-photo-zoom" className={CSSStyle['zoom-photo']} src={props.photo}></img>
    </div>
  )
};

export default PhotoZoom;