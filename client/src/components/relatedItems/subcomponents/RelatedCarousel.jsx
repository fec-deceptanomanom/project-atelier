import React from 'react';
import CSSLight from './../relatedItemsLight.module.css';
import RelatedCard from './RelatedCard.jsx';
import LeftButton from './LeftButton.jsx';
import RightButton from './RightButton.jsx';

class RelatedCarousel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      }
    }


  render () {

    const cards = this.props.items.map( (item, i) => {
      return <li key={i}> <RelatedCard cardInfo={item} /> </li>
    })
    return (
      <div className={CSSLight.relatedCarousel}>
        <h2>I am the Related Carousel</h2>
        <div>
          <LeftButton />
          <ul>{cards}</ul>
          <RightButton />
        </div>
      </div>
    )
  };
};



export default RelatedCarousel;