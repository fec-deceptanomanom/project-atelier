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
    const ids = this.props.ids;
    console.log('Related IDs', ids)
    $.get({
      url: 'http://localhost:3000/relatedItems',
      data: JSON.stringify(ids),
      dataType: 'json',
      success: data => {
        console.log(data);
      }
    })
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
