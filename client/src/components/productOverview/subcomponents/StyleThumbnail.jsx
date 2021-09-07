import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import CSSLight from '../styles/productOverviewLight.module.css';
import CSSDark from '../styles/productOverviewDark.module.css';

const StyleThumbnail = ( props ) => {
  return (
    <Router>
      <div className='style-thumbnail'>
        <Link
          className="btn style-thumbnail"
          role="button"
          to={'/' + props.data}
          onClick={() => console.log('You clicked me!')}
          >
          {props.data}
        </Link>
      </div>
    </Router>
  );
}

export default StyleThumbnail;