import React from 'react';

const PhotoThumbnail = (props) => {
  return (
    <div>
      <a className={props.CSSStyle.photoRemove} onClick={props.remove}><i id="remove-photo-upload" className="far fa-times-circle"></i></a>
      <img id="photo-thumbnail" className={props.CSSStyle.photoThumbnail} title={props.data.title} file={props.data.file} src={props.data.url} alt="..."></img>
    </div>
  )

};

export default PhotoThumbnail;