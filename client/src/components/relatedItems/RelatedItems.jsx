import React from 'react';
import CSSLight from './relatedItemsLight.module.css';
import CSSDark from './relatedItemsDark.module.css';
import axios from 'axios';

import { withClickTracker } from '../../../lib/interactions.jsx';
import RelatedCarousel from './subcomponents/RelatedCarousel.jsx';
import OutfitList from './subcomponents/OutfitList.jsx';

const { URL_BASE } = require('../../../../.secretURL.json');

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedItems: [],
      carouselItems: [], //max 4
      leftButton: true,
      rightButton: true,
      counter: 0,
      outfitItems: [1, 1, 1]
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
          axios.get(`${URL_BASE}/productInfo/${id}`)
            .then(response => {
              resolve(response.data);
            })
            .catch(err => {
              console.error(err);
            })
        })
      })
    )
      .then(results => {
        let relateds = results.map((res, i) => {
          return {
            product: res.productInfo,
            style: res.styleInfo,
            reviews: res.reviewInfo
          };
        });
        if (results.length <= 4) {
          this.setState({
            relatedItems: relateds,
            carouselItems: relateds,
            leftButton: false,
            rightButton: false,
          })
        } else {
          let displayItems = relateds.slice(0, 4);
          this.setState({
            relatedItems: relateds,
            carouselItems: displayItems,
            leftButton: false
          })
        }
      })
      .catch(err => {
        console.error(err);
      })
  }

  goLeft() {
    let length = this.state.carouselItems.length; //4
    let count = length - this.state.counter - 1; //5 - 4 = 1
    let newList = this.state.carouselItems.map((item, i) => {
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
    let newList = this.state.carouselItems.map((item, i) => {
      count++;
      return this.state.relatedItems[count];
    }); //4        1
    if (count > length - this.state.carouselItems.length - 1) {
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
    let dir = e.target.className[12];
    dir === 'l' ? this.goLeft() : this.goRight();
  }

  componentDidUpdate() { }

  render() {
    const compon = "Related Items";
    return (
      <div id="related-items"
           className={CSSLight.related}
           onClick={(e)=> {
             this.props.clickTracker((e.target.attributes.id.value), compon)
            }}>
        <h1 id={CSSLight['related-items-h1']}>Related Items</h1>
        <div id="related-items-container">
          <RelatedCarousel items={this.state.carouselItems}
            pageItem={this.props.pageItem}
            left={this.state.leftButton}
            right={this.state.rightButton}
            goDir={this.whichDir} />
          <OutfitList pageItem={this.props.pageItem}/>
        </div>
      </div>
    );
  }
}

// expected prop.types: array

export default withClickTracker(RelatedItems);
