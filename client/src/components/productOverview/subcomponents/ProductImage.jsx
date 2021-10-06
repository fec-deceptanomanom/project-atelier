import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

import ImageCarousel from './ImageCarousel.jsx';

class ProductImage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      currentPhoto: props.currentStyle ? props.currentStyle.photos[0] : null,
      currentPhotoIndex: 0,
      currentStyleId: props.currentStyle.style_id
    };
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
          <ImageCarousel images={this.props.currentStyle.photos}/>
          {imageElement}
        </div>
      );
    } else {
      return (<h1>Loading...</h1>)
    }
  }
}


export default ProductImage;