import React from 'react';
import CSSLight from './../relatedItemsLight.module.css';

class OufitCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: 'Loading...',
      crutches: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn15.bestreviews.com%2Fimages%2Fv4desktop%2Fproduct-matrix%2Fdmi-crutches--push-button-adjustable-crutches-f94027.jpg&f=1&nofb=1',
    }
  }

  getStars(ratings) {
    let ratingSum = 0;
    let ratingQuantity = 0;
    for (const [key, value] of Object.entries(ratings)) {
      ratingSum += (Number(key) * Number(value));
      ratingQuantity += Number(value);
    }
    return (Math.round((ratingSum / ratingQuantity) * 4) / 4).toFixed(2);
  }
  findDefaultResult(results) {
    //Find the default object
    let defal = results.find(result => result['default?']) || 'Not Found';
    return defal;
  }
  findThumbnail(item) {
    //select the first thumbnail found or give'em some crutches
    if (item === 'Not Found') { return this.state.crutches; }
    let photo = item.photos.find( photo => photo.thumbnail_url);
    if (!photo) { return this.state.crutches; }
    return photo.thumbnail_url;
  }
  render () {
    if (this.props.info === 1) {
      return (
        <div id='outfit-card' className={CSSLight.outfitCard}>
          <h4 id='outfit-card-h4'>Outfit Card</h4>
          <p id='outfit-card-name' className={CSSLight.name}>Empty Card</p>
          <p id='outfit-card-category-key' className={CSSLight.category}>Department:    </p>
          <p id='outfit-card-category-value' className={CSSLight.categoryValue}>category</p>
          {/* <img id='outfit-card-thumbnail' className={CSSLight.thumbnail} alt='Image not Found'></img> */}
          <ul id='outfit-card-list'>
            <li id='outfit-card-price'>Price: ???</li>
            <li id='outfit-card-stars'>Stars: ???</li>
          </ul>
        </div>
      )
    } else { //there is info
      const product = this.props.info.product;
      const ratings = this.props.info.reviews.ratings;
      // const defaultItem = this.findDefaultResult(this.props.info.style.results);
      // const thumbnail = this.findThumbnail(defaultItem);
      const XButton = (
        <div id='remove-outfit-container'>
          <button id='remove-outfit' onClick={'remove this card from carousel'}>X</button>
        </div>
      );
      return (
        <div id='outfit-card' className={CSSLight.outfitCard}>
          <h4 id='outfit-card-h4'>Outfit Card</h4>
          <p id='outfit-card-name' className={CSSLight.name}>{product.name}</p>
          <p id='outfit-card-category-key' className={CSSLight.category}>Department:    </p>
          <p id='outfit-card-category-value' className={CSSLight.categoryValue}>{product.category}</p>
          <img id='outfit-card-thumbnail' className={CSSLight.thumbnail} alt='Image not Found'></img>
          <ul id='outfit-card-list'>
            <li id='outfit-card-price'>Price: {product.default_price}</li>
            <li id='outfit-card-stars'>Stars: {this.getStars(ratings)}</li>
          </ul>
        </div>
      )
    }
  }
}

export default OufitCard;