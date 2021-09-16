import React from 'react';
import CSSLight from './relatedItemsLight.module.css';
import CSSDark from './relatedItemsDark.module.css';
import $ from 'jquery';

import RelatedCarousel from './subcomponents/RelatedCarousel.jsx'
import OutfitCarousel from './subcomponents/OutfitCarousel.jsx'

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedItems: []
    };
  }

  componentDidUpdate() {
    console.log('Related IDs', this.props)
    const ids = this.props.ids

    //I need to make 4 get REQs
    //make four promises and then Promise.all
    // on resolve add the data to state.related items.

  }

  render() {
    return (
      <div className={CSSLight.related} id="RelatedItems">
        <h1 className={CSSLight.testBanner}>Related Items</h1>
        <div>
          {/* {console.log('RELATED ITEMS PROPS', this.props.ids)} */}
          <RelatedCarousel ids={this.props.ids}/>
          <OutfitCarousel />
        </div>
      </div>
    );
  }
}

// expected prop.types: array

export default RelatedItems;
