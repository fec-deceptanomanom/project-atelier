import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';
import CSSLight from '../styles/productOverviewLight.module.css';
import CSSDark from '../styles/productOverviewDark.module.css';

import { withClickTracker } from '../../../../lib/interactions.jsx';

const StyleThumbnail = ( props ) => {
  const {interaction, onStyleClick, style} = props;
  const element = "style-thumbnail";
  const component = "Product Overview";
  return (
    <button
      className={CSSCommon[element]}
      onClick={() => {
        interaction(element, component);
        onStyleClick(style);
      }}
    >
      {style.name}
    </button>
  );
}

// export default StyleThumbnail;
export default withClickTracker(StyleThumbnail);