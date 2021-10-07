import React from 'react';
import CSSLight from '.././relatedItemsLight.module.css';
import CSSDark from '.././relatedItemsDark.module.css';

class RelatedCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: 'Loading...',
      crutches: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn15.bestreviews.com%2Fimages%2Fv4desktop%2Fproduct-matrix%2Fdmi-crutches--push-button-adjustable-crutches-f94027.jpg&f=1&nofb=1',
    }
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

  priceIs(defaultItem) {
    let originalPrice = defaultItem.original_price || 'ERROR Price not Found';
    let onSale = !!defaultItem.sale_price;
    let price;
    if (onSale) {
      price = <div>
                <strike>{'$' + originalPrice}</strike> {'$' + defaultItem.sale_price}
              </div>;
    } else {
      price = '$' + originalPrice;
    }
    return price;
  }
  render() {
    const defaultItem = this.findDefaultResult(this.props.info.style.results);
    console.log('default', defaultItem)

    const thumbnail = this.findThumbnail(defaultItem);
    const price = this.priceIs(defaultItem);
    console.log('price', price);
    const btnID = this.props.info.product.id;
    const starButton = (
      <div id='related-card-star-container'className={CSSLight.starContainer}>
        <p id='related-card-star-caption'>Click to compare:
          <i className="fa fa-star fa-lg"
             aria-hidden="true"
             id={btnID}
             onClick={this.props.toggleModal}>
          </i>
        </p>
      </div>
    );
    // const price = {onSale} ? (<strike> {originalPrice} </strike> {defaultItem.sale_price}) : {originalPrice};
    const product = this.props.info.product;
    const ratings = this.props.info.reviews.ratings;

    return (
      <div id='related-card' className={CSSLight.relatedCard}>
        <p id='related-card-name' className={CSSLight.name}>{product.name}</p>
        <p id='related-card-categoryKey' className={CSSLight.category}>Department:    </p>
        <p id='related-card-categoryVaue' className={CSSLight.categoryValue}>{product.category}</p>
          {starButton}
        <img id='related-card-thumbnail' className={CSSLight.thumbnail} src={thumbnail} alt='Image not Found'></img>
        <div id='related-card-price' className={CSSLight.price}>Only! {price}</div>
        <div id='related-card-stars' className={CSSLight.stars}>Stars: {this.props.stars(ratings)}</div>
      </div>
    )
  }
}


export default RelatedCard;