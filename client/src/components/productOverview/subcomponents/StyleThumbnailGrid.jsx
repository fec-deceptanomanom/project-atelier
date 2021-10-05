import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';
import CSSLight from '../styles/productOverviewLight.module.css';
import CSSDark from '../styles/productOverviewDark.module.css';

import StyleThumbnail from './StyleThumbnail.jsx';

const StyleThumbnailGrid = ( props ) => {
  console.log(props.currentStyle);
  return (
    <div id={'style-thumbnail-grid'} className={CSSCommon['style-thumbnail-grid']}>
      {props.styles.results ? props.styles.results.map((style, idx) => {
        return <StyleThumbnail
          style={style}
          onStyleClick={props.onStyleClick}
          key={idx}
          idx={idx}
          isCurrent={props.currentStyle.style_id === style.style_id}
        />
      }) : <></>}
    </div>
  );
}

export default StyleThumbnailGrid;