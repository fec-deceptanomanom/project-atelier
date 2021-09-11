import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import CSSCommon from '../styles/productOverview.module.css';
import CSSLight from '../styles/productOverviewLight.module.css';
import CSSDark from '../styles/productOverviewDark.module.css';

const StyleThumbnail = ( props ) => {
  return (
    // <Router>
    //   <div className={CSSCommon['style-thumbnail']}>
    //     <Link
    //       className={CSSCommon['style-thumbnail-a']}
    //       role="button"
    //       to={'/' + props.data}
    //       onClick={() => console.log('You clicked me!')}
    //       >
    //       {/* {props.data} */}
    //     </Link>
    //   </div>
    // </Router>
    <button className={CSSCommon['style-thumbnail']}>{props.data.name}</button>
  );
}

export default StyleThumbnail;