import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';
import CSSLight from '../styles/productOverviewLight.module.css';
import CSSDark from '../styles/productOverviewDark.module.css';
const $ = require('jquery');

import ImageCarousel from './ImageCarousel.jsx';
import imageZoom from '../../../../lib/zoomBox.js';

class ProductImage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      currentPhoto: props.currentStyle ? props.currentStyle.photos[0] : null,
      currentPhotoIndex: 0,
      currentStyleId: props.currentStyle.style_id,
      numberOfPhotos: Object.keys(props.currentStyle.photos).length,
      isExtraZoomed: false
    };
    this.setImage = this.setImage.bind(this);
    this.changeToLeftImage = this.changeToLeftImage.bind(this);
    this.changeToRightImage = this.changeToRightImage.bind(this);
    this.expandOrZoom = this.expandOrZoom.bind(this);
    this.getCursorPos = this.getCursorPos.bind(this);
    this.toggleExtraZoom = this.toggleExtraZoom.bind(this);
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

  componentDidMount() {
    $('#product-overview-image-space').click(e => {
      if (e.target.id === 'product-overview-image-space' || e.target.id === 'product-overview-image') {
        this.expandOrZoom();
        // console.log(this.getCursorPos(e));
      }
    });
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

  expandOrZoom() {
    this.props.isExpanded ? this.toggleExtraZoom() : this.props.toggleExpandImage();
  }

  toggleExtraZoom() {
    let extraZoom = this.state.isExtraZoomed;
    this.setState({
      ...this.state,
      isExtraZoomed: !extraZoom
    });
    if (!extraZoom) {
      // console.log(this.toggleExtraZoom);
      imageZoom('product-overview-image', 'zoom-output', this.toggleExtraZoom);
    } else {
      $('.img-zoom-lens').remove();
    }
  }

  getCursorPos(e) {
    // Adopted from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_image_zoom
    var img = document.getElementById('product-overview-image');
    var a, x = 0, y = 0;
    e = e || window.event;
    a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }

  render() {
    let CSS = this.props.darkmode ? CSSDark : CSSLight;
    if (this.props.currentStyle) {
      let imageElement;
      if (this.state.currentPhoto && this.state.currentPhoto.url !== null) {
        imageElement = (<img id={'product-overview-image'} className={CSSCommon['main-img']} src={this.state.currentPhoto.url} alt={"404"}></img>);
      } else {
        imageElement = (<p id={'missing-main-img'}>Image not found</p>);
      }
      return (
        <div
          className={CSSCommon['product-overview-image'] + " " + CSS['product-overview-image']}
          // onClick={this.expandOrZoom}
          id={'product-overview-image-space'}
          style={{cursor: this.props.isExpanded ? (this.state.isExtraZoomed ? "vertical-text" : "crosshair") : "zoom-in"}}
        >
          <button
            id={'image-button-left'}
            className={CSSCommon['img-shift-left-arrow']}
            onClick={this.changeToLeftImage}
            aria-label={'button to change main image to left image'}
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <ImageCarousel
            images={this.props.currentStyle.photos}
            setImage={this.setImage}
            currentStyleId={this.props.currentStyle.style_id}
            currentIdx={this.state.currentPhotoIndex}
          />

          {imageElement}

          <button
            id={'image-button-right'}
            className={CSSCommon['img-shift-right-arrow']}
            onClick={this.changeToRightImage}
            aria-label={'button to change main image to right image'}
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          <button
            id={'image-expand'}
            className={CSSCommon['img-expand-btn']}
            onClick={this.props.toggleExpandImage}
            aria-label={'button to expand main image'}
          >
            <i className="fas fa-expand"></i>
          </button>
          <div
            id={"zoom-output"}
            className={CSSCommon["img-zoom-result"]}
            style={{visibility: this.state.isExtraZoomed ? 'visible' : 'hidden'}}
          ></div>
        </div>
      );
    } else {
      return (<h1>Loading...</h1>)
    }
  }
}


export default ProductImage;