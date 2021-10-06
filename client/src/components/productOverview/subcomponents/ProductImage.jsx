import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

import ImageCarousel from './ImageCarousel.jsx';

class ProductImage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      currentPhoto: props.currentStyle ? props.currentStyle.photos[0] : null,
      currentPhotoIndex: 0,
      currentStyleId: props.currentStyle.style_id,
      numberOfPhotos: Object.keys(props.currentStyle.photos).length
    };
    this.setImage = this.setImage.bind(this);
    this.changeToLeftImage = this.changeToLeftImage.bind(this);
    this.changeToRightImage = this.changeToRightImage.bind(this);
  }

  changeToLeftImage() {
    if (this.state.currentPhotoIndex > 0) {
      this.setImage(this.state.currentPhotoIndex - 1);
    }
  }

  changeToRightImage() {
    if (this.state.currentPhotoIndex < (this.state.numberOfPhotos - 1)) {
      this.setImage(this.state.currentPhotoIndex + 1);
    }
  }

  setImage(idx) {
    this.setState({
      ...this.state,
      currentPhoto: this.props.currentStyle.photos[idx],
      currentPhotoIndex: idx
    })
  }

  componentDidUpdate() {
    if (this.state.currentStyleId !== this.props.currentStyle.style_id) {
      this.setState({
        currentPhoto: this.props.currentStyle ? this.props.currentStyle.photos[0] : null,
        currentPhotoIndex: 0,
        currentStyleId: this.props.currentStyle.style_id
      });
    }
  }

  render() {
    if (this.props.currentStyle) {
      let imageElement;
      if (this.state.currentPhoto && this.state.currentPhoto.url !== null) {
        imageElement = (<img id={'product-overview-image'} className={CSSCommon['main-img']} src={this.state.currentPhoto.url} alt={"404"}></img>);
      } else {
        imageElement = (<p id={'missing-main-img'}>Image not found</p>);
      }
      return (
        <div
          className={CSSCommon['product-overview-image']}
          onClick={this.props.onClick}
          id={'product-overview-image-space'}
        >
          <button
            id={'image-button-left'}
            className={CSSCommon['img-shift-left-arrow']}
            onClick={this.changeToLeftImage}
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <ImageCarousel
            images={this.props.currentStyle.photos}
            setImage={this.setImage}
            currentStyleId={this.props.currentStyle.style_id}
          />

          {imageElement}

          <button
            id={'image-button-right'}
            className={CSSCommon['img-shift-right-arrow']}
            onClick={this.changeToRightImage}
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          <button
            id={'image-expand'}
            className={CSSCommon['img-expand-btn']}
            onClick={this.props.toggleExpandImage}
          >
            <i className="fas fa-expand"></i>
          </button>
        </div>
      );
    } else {
      return (<h1>Loading...</h1>)
    }
  }
}


export default ProductImage;