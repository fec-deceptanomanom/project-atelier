import React from 'react';
import CSSLight from './relatedItemsLight.module.css';
import CSSDark from './relatedItemsDark.module.css';
import axios from 'axios';

import RelatedCarousel from './subcomponents/RelatedCarousel.jsx'
import OutfitCarousel from './subcomponents/OutfitCarousel.jsx'

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedItems: [],
      carouselItems: [] //max 4
    };
  }

  componentDidMount() {
    const ids = this.props.ids;

    Promise.all(
      ids.map(id => {
        return new Promise((resolve, reject) => {
          axios.get(`http://localhost:3000/productInfo/${id}`)
            .then(response => {
              // console.log(response.data);
              resolve(response.data);
            })
            .catch(err => {
              console.error(err);
            })
        })
      })
    )
    .then(results => {
      // console.log('RESULTS ARE:', results);
      let displayItems = results.slice(0,4);
      this.setState({
        relatedItems: results,
        carouselItems: displayItems
      })
    })
    .catch(err => {
      console.error(err);
    })
  }

  componentDidUpdate() { }

  render() {
    return (
      <div className={CSSLight.related} id="RelatedItems">
        <h1 className={CSSLight.testBanner}>Related Items</h1>
        <div>
          {/* {console.log('RELATED ITEMS PROPS', this.props.ids)} */}
          <RelatedCarousel items={this.state.carouselItems}/>
          <OutfitCarousel />
        </div>
      </div>
    );
  }
}

// expected prop.types: array

export default RelatedItems;
