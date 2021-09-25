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

  componentDidMount() {
    const defaultItem = this.findDefaultResult(this.props.info.style.results);
    const thumbnail = this.findThumbnail(defaultItem);

    this.setState({
      photo: thumbnail
    })
  }

  render() {
    const btnID = this.props.info.product.id;
    const starButton = (
      <div className={CSSLight.starContainer}>
        <p>Click to compare:
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
      <div className={CSSLight.relatedCard}>
        <p className={CSSLight.name}>{product.name}</p>
        <p className={CSSLight.category}>Department:    </p>
        <p className={CSSLight.categoryValue}>{product.category}</p>
          {starButton}
        <img className={CSSLight.thumbnail} src={this.state.photo} alt='Image not Found'></img>
        <ul>
          <li>Price: {product.default_price}</li>
          <li>Stars: {this.props.stars(ratings)}</li>
        </ul>
      </div>
    )
  }
}


export default RelatedCard;