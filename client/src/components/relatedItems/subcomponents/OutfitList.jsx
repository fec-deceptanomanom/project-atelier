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
      outfits: [1, 1, 1]
    }
  }
  componentDidMount() {
    //check local storage
    let storage = JSON.parse(localStorage.getItem('0, 1, 2'));
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
          console.log('results', results);
          this.setState({
            outfits: results
          })
        })
        .catch(err => {
          console.error(err);
        })
    }
  }
  render() {
    let outfits = this.state.outfits;
    console.log('outfits', outfits)
    outfits = outfits.map( (item, i) => {
      return (
        <div id='outfit-card-container' className={CSSLight.card} key={i}>
          <OutfitCard key={i}
          info={item}
          deleteCard={this.props.deleteCard}/>
        </div>
      )
    });

    return (
      <div id='outfit-list' className={CSSLight.outfitCarousel}>
        <h2 id={CSSLight['outfit-list-h2']}>Your Outfit List</h2>
        <div id='outfit-scroller' className={CSSLight.scroller}>
            <AddToOutfit pageItem={this.props.pageItem} handleClick={this.props.addOutfit}/>
            {outfits}
        </div>
      </div>
    )
  }
};

export default Outfitlist;