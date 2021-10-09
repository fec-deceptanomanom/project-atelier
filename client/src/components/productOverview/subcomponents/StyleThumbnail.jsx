import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';
import CSSLight from '../styles/productOverviewLight.module.css';
import CSSDark from '../styles/productOverviewDark.module.css';

const StyleThumbnail = ( props ) => {
  let CSS = props.darkmode ? CSSDark : CSSLight
  return (
    <div id={'style-thumbnail-wrapper'} className={CSSCommon['style-thumbnail-wrapper']}>
      <button
        id={`style-thumbnail-${props.idx}`}
        className={CSSCommon['style-thumbnail'] + ' ' + CSS['style-thumbnail']}
        onClick={() => {props.onStyleClick(props.style)}}
      >
        {props.style.name}
      </button>
      <i style={{visibility: props.isCurrent ? 'visible' : 'hidden'}} id={CSSCommon['current-style-checkmark']} className="far fa-check-circle"></i>
    </div>
  );
}

export default StyleThumbnail;

// <i class="far fa-check-circle"></i>