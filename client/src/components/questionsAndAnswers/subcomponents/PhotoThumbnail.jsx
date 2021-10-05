import React from 'react';

const PhotoThumbnail = (props) => {
  const CSSStyle = props.CSSStyle;
  return (
    <div id="photo-thumbnail-div" className={CSSStyle['photo-thumbnails']}>
      <a className={CSSStyle['photo-remove']} onClick={props.remove}><i id="remove-photo-upload-icon" className="far fa-times-circle"></i></a>
      <img id="photo-thumbnail" className={CSSStyle['photo-thumbnail']} title={props.data.title} file={props.data.file} src={props.data.url} alt="..."></img>
    </div>
  )

};

export default PhotoThumbnail;