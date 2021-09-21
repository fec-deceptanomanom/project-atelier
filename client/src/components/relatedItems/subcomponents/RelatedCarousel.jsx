import React from 'react';
import CSSLight from './../relatedItemsLight.module.css';
import RelatedCard from './RelatedCard.jsx';
import LeftButton from './LeftButton.jsx';
import RightButton from './RightButton.jsx';

class RelatedCarousel extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
    }
    componentDidUpdate() {
      //handleScroll(direction),
    }

    // sliceItems(items) {
    //   let slicedItems = items.slice(0,4);
    //   console.log('I AM RUNNING in sliceItems DEF\nSLICED is:', sliced)

    //   return slicedItems;
    // }

    goLeft() {

    }

    goRight() {

    }

    // handleScroll(direction) {

    // }

  render () {

    const cards = this.props.items.map( (item, i) => {
      return (
        <div className={CSSLight.card} key={i}>
          <RelatedCard cardInfo={item} />
        </div>
      )
    })

    return (
      <div className={CSSLight.relatedCarousel}>
        <h3>Carousel</h3>
        <div className={CSSLight.scroller}>
          <div className={CSSLight.arrow}><LeftButton /></div>
            {cards}
          <div className={CSSLight.arrow}><RightButton /></div>

         </div>
      </div>
    )
  };
};



export default RelatedCarousel;