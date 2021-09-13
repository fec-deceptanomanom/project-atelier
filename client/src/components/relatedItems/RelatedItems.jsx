import React from 'react';
import CSSLight from './relatedItemsLight.module.css';
import CSSDark from './relatedItemsDark.module.css';

import RelatedCarousel from './subcomponents/RelatedCarousel.jsx'
import OutfitCarousel from './subcomponents/OutfitCarousel.jsx'

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="RelatedItems">
        <h1 className={CSSLight.testBanner}>Testing from Related Items</h1>
        <div>
          <RelatedCarousel />
          <OutfitCarousel />
        </div>
      </div>
    );
  }
}

export default RelatedItems;
