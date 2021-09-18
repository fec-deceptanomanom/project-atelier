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
      return <div className={CSSLight.card} key={i}> <RelatedCard cardInfo={item} /> </div>
    })
    return (
      <div className={CSSLight.relatedCarousel}>

        <LeftButton />
        <div className={CSSLight.scroller}>
          {cards}
        </div>
        <RightButton />
      </div>
    )
  };
};



export default RelatedCarousel;