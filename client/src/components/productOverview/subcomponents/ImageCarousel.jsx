import React from 'react';
import CSSCommon from '../styles/productOverview.module.css';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyleId: props.currentStyleId,
      numberOfPhotos: Object.keys(this.props.images).length,
      photoIndexRange: [],
      needUpArrow: false,
      needDownArrow: false
    };
    this.setInitialIndexRange = this.setInitialIndexRange.bind(this);
    this.setPhotoIndexRange = this.setPhotoIndexRange.bind(this);
    this.moveTilesUpOne = this.moveTilesUpOne.bind(this);
    this.moveTilesDownOne = this.moveTilesDownOne.bind(this);
  }

  setPhotoIndexRange(indices) {
    this.setState({
      ...this.state,
      currentStyleId: this.props.currentStyleId,
      photoIndexRange: indices,
      needUpArrow: indices[0] > 0,
      needDownArrow: indices[indices.length - 1] < (this.state.numberOfPhotos - 1)
    });
  }

  setInitialIndexRange() {
    let initialRange = [];
    for (let k = 0; k < this.state.numberOfPhotos && k < 5; k++) {
      initialRange.push(k);
    }
    this.setPhotoIndexRange(initialRange);
  }

  moveTilesDownOne() {
    // Should only be available if the down arrow is shown
    // If the last photo is showing already, the button will be gone
    let newRange = this.state.photoIndexRange.map(idx => idx + 1);
    this.setPhotoIndexRange(newRange);
  }

  moveTilesUpOne() {
    // Should only be available if the up arrow is shown
    // If the first photo is showing already, the button will be gone
    let newRange = this.state.photoIndexRange.map(idx => idx - 1);
    this.setPhotoIndexRange(newRange);
  }

  componentDidMount() {
    this.setInitialIndexRange();
  }

  componentDidUpdate() {
    if (this.props.currentStyleId !== this.state.currentStyleId) {
      this.setInitialIndexRange();
    }
  }

  render() {
    return (
      <div id={CSSCommon['img-carousel']}>
        <button
          style={{visibility: this.state.needUpArrow ? 'visible' : 'hidden'}}
          id={CSSCommon['test-button-up']}
          className={CSSCommon[`test-button-up`]}
          onClick={this.moveTilesUpOne}
        >
          <i id={'up-arrow'} className="fas fa-chevron-up"></i>
        </button>

        {this.state.photoIndexRange.map((slot, idx) => {
          if (this.props.images[slot.toString()]) {
            return (<button key={idx} id={`test-button-${slot}`} className={CSSCommon['tile']} onClick={() => this.props.setImage(slot)}>
              <img
                id={`tile-img-${idx}`}
                className={CSSCommon['tile-img']}
                src={this.props.images[slot.toString()].thumbnail_url}
              ></img>
            </button>);
          }
        })}

        <button
          style={{visibility: this.state.needDownArrow ? 'visible' : 'hidden'}}
          id={CSSCommon['test-button-down']}
          className={CSSCommon[`test-button-down`]}
          onClick={this.moveTilesDownOne}
        >
          <i id={'down-arrow'} className="fas fa-chevron-down"></i>
        </button>
      </div>
    );
  }
}

export default ImageCarousel;