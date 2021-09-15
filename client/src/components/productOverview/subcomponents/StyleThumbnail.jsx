import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import CSSCommon from '../styles/productOverview.module.css';
import CSSLight from '../styles/productOverviewLight.module.css';
import CSSDark from '../styles/productOverviewDark.module.css';

const StyleThumbnail = ( props ) => {
  return (
    <button className={CSSCommon['style-thumbnail']} onClick={() => props.onStyleClick(props.style)}>{props.style.name}</button>
  );
}

export default StyleThumbnail;