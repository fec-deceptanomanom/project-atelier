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
      carouselItems: [], //max 4
      leftButton: true,
      rightButton: true,
      counter: 0
    };
    this.goRight = this.goRight.bind(this);
    this.goLeft = this.goLeft.bind(this);
    this.whichDir = this.whichDir.bind(this);
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
      if (results.length < 4) {
        let displayItems = results.slice(0,4);
        let length = results.length;
        this.setState({
          relatedItems: results,
          carouselItems: displayItems,
          leftButton: false,
          rightButton: false,
      })
      }
      let displayItems = results.slice(0,4);
      this.setState({
        relatedItems: results,
        carouselItems: displayItems,
        leftButton: false
      })
    })
    .catch(err => {
      console.error(err);
    })
  }

  goLeft() {
    let length = this.state.carouselItems.length; //4
    let count = length - this.state.counter - 1; //5 - 4 = 1
    let newList = this.state.carouselItems.map( (item, i) => {
      count++;
      return this.state.relatedItems[count];
    });
    if (newList[0] === this.state.relatedItems[0]) {
      this.setState({
        carouselItems: newList,
        counter: 0,
        rightButton: true,
        leftButton: false
      });
    } else {
      this.setState({
        carouselItems: newList,
        counter: count,
        rightButton: true
      });
    }
  }

  goRight() {
    let count = this.state.counter;
    let length = this.state.relatedItems.length //5
    let newList = this.state.carouselItems.map( (item, i) => {
      count++;
      return this.state.relatedItems[count];
    });
    if (count > length - this.state.carouselItems.length)  {
      //get rid of right button
      this.setState({
        carouselItems: newList,
        counter: count,
        rightButton: false,
        leftButton: true
      })
    } else {
      this.setState({
        carouselItems: newList,
        counter: count,
        leftButton: true
      })
    }
  }

  whichDir(e) {
    let dir = e.target.className[12]; // dir = 'l' || 'r'
    console.log('DIR is ', dir);
    dir === 'l' ? this.goLeft() : this.goRight();
    //`go${direction}()`;
  }

  componentDidUpdate() { }

  render() {
    return (
      <div className={CSSLight.related} id="RelatedItems">
        <h1 className={CSSLight.testBanner}>Related Items</h1>
        <div>
          {/* {console.log('RELATED ITEMS PROPS', this.props.ids)} */}
          <RelatedCarousel items={this.state.carouselItems}
                           left={this.state.leftButton}
                           right={this.state.rightButton}
                           goDir={this.whichDir} />
          <OutfitCarousel />
        </div>
      </div>
    );
  }
}

// expected prop.types: array

export default RelatedItems;
