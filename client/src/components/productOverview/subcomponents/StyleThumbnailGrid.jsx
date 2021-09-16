import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';
import CSSLight from '../styles/productOverviewLight.module.css';
import CSSDark from '../styles/productOverviewDark.module.css';

import StyleThumbnail from './StyleThumbnail.jsx';

const StyleThumbnailGrid = ( props ) => {
  return (
    <div className={CSSCommon['style-thumbnail-grid']}>
      {props.styles.results ? props.styles.results.map(style => {
        return <StyleThumbnail style={style} onStyleClick={props.onStyleClick} key={props.styles.results.indexOf(style)}/>
      }) : <></>}
    </div>
  );
}

export default StyleThumbnailGrid;