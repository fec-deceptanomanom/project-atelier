import React from 'react';
import CSSLight from './../relatedItemsLight.module.css';
import RelatedCard from './RelatedCard.jsx';
import LeftButton from './LeftButton.jsx';
import RightButton from './RightButton.jsx';

class RelatedCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  componentDidUpdate() {}

  getRoundedRating(ratings) {
    let ratingSum = 0;
    let ratingQuantity = 0;
    for (const [key, value] of Object.entries(ratings)) {
      ratingSum += (Number(key) * Number(value));
      ratingQuantity += Number(value);
    }
    return (Math.round((ratingSum / ratingQuantity) * 4) / 4).toFixed(2);
  }

  render () {

    const cards = this.props.items.map( (item, i) => {
      return (
        <div className={CSSLight.card} key={i}>
          <RelatedCard info={item} stars={this.getRoundedRating} />
        </div>
      )
    })

    if (!this.props.left) {
      return (
        <div className={CSSLight.relatedCarousel}>
          <h3>Carousel</h3>
          <div className={CSSLight.scroller}>
              {cards}
            <div className={CSSLight.arrow}>
              <RightButton right={this.props.right}
                           handleClick={this.props.goDir} />
            </div>
          </div>
        </div>
      )
    }
    if (!this.props.right) {
      return (
        <div className={CSSLight.relatedCarousel}>
          <h3>Carousel</h3>
          <div className={CSSLight.scroller}>
            <div className={CSSLight.arrow}>
              <LeftButton left={this.props.left}
                          handleClick={this.props.goDir} />
            </div>
              {cards}
          </div>
        </div>
      )
    }
    if (!this.props.left && !this.props.right) {
      return (
        <div className={CSSLight.relatedCarousel}>
          <h3>Carousel</h3>
          <div className={CSSLight.scroller}>
              {cards}
          </div>
        </div>
      )
    } else {
      return (
        <div className={CSSLight.relatedCarousel}>
          <h3>Carousel</h3>
          <div className={CSSLight.scroller}>
            <div className={CSSLight.arrow}>
              <LeftButton left={this.props.left}
                          handleClick={this.props.goDir} />
            </div>
              {cards}
            <div className={CSSLight.arrow}>
              <RightButton right={this.props.right}
                           handleClick={this.props.goDir } />
            </div>

          </div>
        </div>
      )
    }
  };
};



export default RelatedCarousel;