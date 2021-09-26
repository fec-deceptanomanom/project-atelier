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

  render() {
    const defaultItem = this.findDefaultResult(this.props.info.style.results);
    const thumbnail = this.findThumbnail(defaultItem);
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
    const product = this.props.info.product;
    const ratings = this.props.info.reviews.ratings;

    return (
      <div id='related-card' className={CSSLight.relatedCard}>
        <p id='related-card-name' className={CSSLight.name}>{product.name}</p>
        <p id='related-card-categoryKey' className={CSSLight.category}>Department:    </p>
        <p id='related-card-categoryVaue' className={CSSLight.categoryValue}>{product.category}</p>
          {starButton}
        <img id='related-card-thumbnail' className={CSSLight.thumbnail} src={thumbnail} alt='Image not Found'></img>

        <ul id='related-card-list'>
          <li id='related-card-price'>Price: {product.default_price}</li>
          <li id='related-card-stars'>Stars: {this.props.stars(ratings)}</li>
        </ul>
      </div>
    )
  }
}


export default RelatedCard;