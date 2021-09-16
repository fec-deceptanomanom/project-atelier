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
  // const ids = this.props.ids || []; //will be the result of a map <RelatedCard
  //for each id render a card
  // const cardList = ids.map( id => {
  //   return <RelatedCard id={id}/>
  // })
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.ids !== this.props) {
      console.log('hello');
    }
  }
  render () {

    return (
      <div className={CSSLight.relatedCarousel}>
        <h2>I am the Related Carousel</h2>
        <div>
          <LeftButton />
          <RelatedCard />
          <RightButton />
        </div>
      </div>
    )
  };
};



export default RelatedCarousel;