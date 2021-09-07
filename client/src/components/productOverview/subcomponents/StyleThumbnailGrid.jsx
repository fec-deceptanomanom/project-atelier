import React from 'react';
import CSSLight from '../styles/productOverviewLight.module.css';
import CSSDark from '../styles/productOverviewDark.module.css';

import StyleThumbnail from './StyleThumbnail.jsx';

const StyleThumbnailGrid = ( props ) => {
  return (
    <div id='style-thumbnail-grid'>
      {props.styles.map(style => {
        return <StyleThumbnail data={style}/>
      })}
      {/* <StyleThumbnail /> */}
    </div>
  );
}

export default StyleThumbnailGrid;