import React from 'react';
import CSSLight from './../relatedItemsLight.module.css';

import OutfitCard from './OutfitCard.jsx';
import AddToOutfit from './AddToOutfit.jsx';
import axios from 'axios';
import $ from 'jquery';
import URL_BASE from '../../../../../.secretURL.json';

class Outfitlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfitItems: []
    }
    this.updateOutfitItems = this.updateOutfitItems.bind(this);
    this.deleteOutfitCard = this.deleteOutfitCard.bind(this);
  }

  updateOutfitItems (e) {
    //find Index of props.pageItem;
    if (this.state.outfitItems && this.state.outfitItems.indexOf(this.props.pageItem) !== -1) {
      alert('This item has already been added to the Outfit list')
      return;
    }
    let update = this.state.outfitItems.slice() || [];
    // let index = update.indexOf(1);
    //organize pageItem
    update.push(this.props.pageItem);
    this.setState({
      outfitItems: update
    })
    this.updateLocalStorage(update.productInfo.id);

  }

  deleteOutfitCard(e) {
    console.log('deleteOutfit Target', e.target)
    let copy = this.state.outfitItems.slice();
    //find which elem has the same product.id
    let update = copy.map( (item, i) => {

      if (e.target === item.productInfo.id) {}
    })
    this.setState({
      outfitItems: update
    })

    this.updateLocalStorage(update.productInfo.id);
  }

  updateLocalStorage(update) {
    let ids = update.map(item => {
      if (item.product) {
        return item.product.id
      }
      return item;
    });

    window.localStorage.clear();
    window.localStorage.setItem('0, 1, 2', JSON.stringify(ids));
  }

  componentDidMount() {
    //check local storage
    let storage = JSON.parse(localStorage.getItem('0, 1, 2'));
    if (!storage) {
      return;
    }
    const urlId = window.location.href.split('/p/')[1].replace('/', '');
    let ids = [];
    console.log('storage', storage);
    // if any outfits have a length of 5
    storage.forEach( (item) => {
      console.log('item', typeof item)
      if (item !== 1) {
        ids.push(item);
      }
    });
    console.log('IDS', ids);

    if (ids.length > 0) {
      Promise.all(
        ids.map(id => {
          return new Promise((resolve, reject) => {
            axios.get(`/productInfo/${id}`)
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
              styles: res.styleInfo,
              reviews: res.reviewInfo
            };
          });
          this.setState({
            outfitItems: relateds
          })
        })
        .catch(err => {
          console.error(err);
        })
    }
  }

  componentDidUpdate() {}


  render() {
    console.log('outfits', outfits)
    let outfits;
    if (this.state.outfitItems.length === 0) {
      outfits = (<div id='outfit-card-container' className={CSSLight.card}></div>);
    } else {
      outfits = this.state.outfitItems.map( (item, i) => {
        return (
          <div id='outfit-card-container' className={CSSLight.card} key={i}>
            <OutfitCard key={i}
            info={item}
            deleteCard={this.deleteCard}/>
          </div>
        )
      });
    }
    return (
      <div id='outfit-list' className={CSSLight.outfitCarousel}>
        <h2 id={CSSLight['outfit-list-h2']}>Your Outfit List</h2>
        <div id='outfit-scroller' className={CSSLight.scroller}>
            <AddToOutfit pageItem={this.props.pageItem} handleClick={this.updateOutfitItems}/>
            {outfits}
        </div>
      </div>
    )
  }
};

export default Outfitlist;