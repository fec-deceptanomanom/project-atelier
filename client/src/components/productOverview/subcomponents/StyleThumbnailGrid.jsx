import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';
import CSSLight from '../styles/productOverviewLight.module.css';
import CSSDark from '../styles/productOverviewDark.module.css';

import StyleThumbnail from './StyleThumbnail.jsx';

const StyleThumbnailGrid = ( props ) => {
  return (
    <div id={CSSCommon['style-thumbnail-grid']}>
      {props.styles.map(style => {
        return <StyleThumbnail data={style} key={props.styles.indexOf(style)}/>
      })}
    </div>
  );
}

export default StyleThumbnailGrid;