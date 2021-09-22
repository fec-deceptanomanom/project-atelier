import React from 'react';

const PhotoThumbnail = (props) => {
  return (
    <img className={props.CSSStyle.photoThumbnail} title={props.data.title} src={props.data.url} alt="..."></img>
  )

};

export default PhotoThumbnail;