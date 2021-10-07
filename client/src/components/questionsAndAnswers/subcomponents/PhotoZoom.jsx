import React from 'react';

const PhotoZoom = (props) => {
  const CSSStyle = props.CSSStyle;
  return (
    <div id={'zoomed-in-photo-div' + props.answerID} className={CSSStyle.modal}>
      <div id="zoomed-in-answer-photo" className={[CSSStyle['modal-content'], CSSStyle['photo-zoom']].join(' ')}>
       <span id="close-photo-zoom-span" className={CSSStyle.close} aria-label="Close" onClick={props.closeZoom}><i id="close-photo-zoom" className="far fa-times-circle"></i></span>
      <img id="answer-photo-zoom" className={CSSStyle['zoom-photo']} src={props.photo} alt="Zoomed in Photo"></img>
      </div>
    </div>
  )
};

export default PhotoZoom;