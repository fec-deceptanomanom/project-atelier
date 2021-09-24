import React from 'react';
import CSSLight from './../relatedItemsLight.module.css';
import RelatedCard from './RelatedCard.jsx';
import LeftButton from './LeftButton.jsx';
import RightButton from './RightButton.jsx';
import ComparisonModal from './ComparisonModal.jsx';


class RelatedCarousel extends React.Component {
  constructor(props) { //pageItem={this.props.pageItem}
    super(props);
    this.state = {
      modal: false,
      clickedItem: null
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.getRoundedRating = this.getRoundedRating.bind(this);
    this.findProdByID = this.findProdByID.bind(this);
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

  toggleModal(e) {
    console.log('Card clicked\n', e.target.id);
    let item = this.findProdByID(e.target.id);
    this.setState({
      modal: !this.state.modal,
      clickedItem: item
    })
  }

  findProdByID(id) {
    let toCompare = this.props.items.find(item => item.product.id === Number(id));
    console.log('findByID', toCompare);
    return toCompare;
  }

  render () {

    const cards = this.props.items.map( (item, i) => {
      return (
        <div className={CSSLight.card} key={i}>
          <RelatedCard info={item}
                       stars={this.getRoundedRating}
                       toggleModal={this.toggleModal}/>
        </div>
      )
    })

    if (!this.props.left) {
      return (
        <div className={CSSLight.relatedCarousel}>
          {/* conditional render */}
          {this.state.modal && <ComparisonModal toggleModal={this.toggleModal}
                                                currentItem={this.props.pageItem}
                                                stars={this.getRoundedRating}
                                                clickedItem={this.state.clickedItem}/>}
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
                    {this.state.modal && <ComparisonModal toggleModal={this.toggleModal}
                                                currentItem={this.props.pageItem}
                                                stars={this.getRoundedRating}
                                                clickedItem={this.state.clickedItem}/>}
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
                    {this.state.modal && <ComparisonModal toggleModal={this.toggleModal}
                                                currentItem={this.props.pageItem}
                                                stars={this.getRoundedRating}
                                                clickedItem={this.state.clickedItem}/>}
          <h3>Carousel</h3>
          <div className={CSSLight.scroller}>
              {cards}
          </div>
        </div>
      )
    } else {
      return (
        <div className={CSSLight.relatedCarousel}>
                    {this.state.modal && <ComparisonModal toggleModal={this.toggleModal}
                                                currentItem={this.props.pageItem}
                                                stars={this.getRoundedRating}
                                                clickedItem={this.state.clickedItem}/>}
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