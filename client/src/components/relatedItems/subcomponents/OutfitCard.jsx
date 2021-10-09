import React from 'react';
import CSSLight from './../relatedItemsLight.module.css';
import StarRating from './StarRating.jsx';
class OufitCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: 'Loading...',
      crutches: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn15.bestreviews.com%2Fimages%2Fv4desktop%2Fproduct-matrix%2Fdmi-crutches--push-button-adjustable-crutches-f94027.jpg&f=1&nofb=1',
    }
  }

  priceIs(defaultItem) {
    let originalPrice = defaultItem.original_price || ' 404 not found';
    let onSale = !!defaultItem.sale_price;
    let price;
    if (onSale) {
      price = <div>
                <div id={CSSLight['original-price']}>{'$' + originalPrice} </div>
                <span id={CSSLight['sale-price']}>{'$' + defaultItem.sale_price}!</span>
              </div>
    } else {
      price = '$' + originalPrice;
    }
    return price;
  }
  findDefaultResult(results) {
    //Find the default object
    let defal = results.find(result => result['default?']) || results[0];
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
          <h4 id='outfit-card-h4'>Your new fav item!!</h4>

        </div>
      ) n
    } else { //there is info
      const product = this.props.info.product;
      console.log('review info', this.props.info)
      const ratings = this.props.info.reviews.ratings || {'0': 0};
      const defaultItem = this.findDefaultResult(this.props.info.styles.results) || 'ERROR';
      const price = this.priceIs(defaultItem);
      const thumbnail = this.findThumbnail(defaultItem);
      const XButton = (
        <div id='remove-outfit-container'>
          <i id={product.id}
          className="fa fa-times-circle"
          aria-hidden="true"
          onClick={this.props.deleteCard}></i>
        </div>
      );
      return (
        <div id='outfit-card' className={CSSLight.outfitCard}>
          <p id='outfit-card-name' className={CSSLight.name}>{product.name}</p>
          <p id='outfit-card-category-key' className={CSSLight.category}>Department:    </p>
          <p id='outfit-card-category-value' className={CSSLight.categoryValue}>{product.category}</p>
          {XButton}
          <img id='outfit-card-thumbnail' className={CSSLight.thumbnail} src={thumbnail} alt='Image not Found'></img>
          <div id='outfit-card-footer' className={CSSLight.footer}>
            <div id={CSSLight['outfit-card-price']} className={CSSLight.price}>{price}</div>
            <div id='outfit-card-stars' className={CSSLight.stars}>{StarRating(ratings)}</div>
          </div>
        </div>
      )
    }
  }
}

export default OufitCard;