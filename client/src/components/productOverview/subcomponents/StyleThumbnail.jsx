import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';
import CSSLight from '../styles/productOverviewLight.module.css';
import CSSDark from '../styles/productOverviewDark.module.css';

import { withClickTracker } from '../../../../lib/interactions.jsx';

const StyleThumbnail = ( props ) => {
  const id = `style-thumbnail-${props.idx}`;
  return (
    <div className={CSSCommon['style-thumbnail-wrapper']}>
      <button
        id={id}
        className={CSSCommon['style-thumbnail']}
        onClick={() => {props.onStyleClick(props.style)}}
      >
        {props.style.name}
      </button>
      <i id={CSSCommon['current-style-checkmark']} class="fas fa-check-circle"></i>
    </div>
  );
}

export default StyleThumbnail;