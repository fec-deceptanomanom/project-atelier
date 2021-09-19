import React from 'react';
import CSSLight from '.././relatedItemsLight.module.css';
import CSSDark from '.././relatedItemsDark.module.css';

import ComparisonModal from './ComparisonModal.jsx';

class RelatedCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: 'Loading...',
      crutches: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn15.bestreviews.com%2Fimages%2Fv4desktop%2Fproduct-matrix%2Fdmi-crutches--push-button-adjustable-crutches-f94027.jpg&f=1&nofb=1'

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
    const defaultItem = this.findDefaultResult(this.props.cardInfo.styleInfo.results);
    const thumbnail = this.findThumbnail(defaultItem);

    this.setState({
      photo: thumbnail
    })
  }

  render() {
    const starButton = (
      <div>
        <button onClick={() => { }} value='Star Button'>Star Button</button>
      </div>
    );
    const info = this.props.cardInfo.productInfo;

    return (
      <div className={CSSLight.relatedCard}>
        <h2>{info.name}</h2>
        <h4>{info.category}</h4>
        {starButton}
        <img className={CSSLight.thumbnail} src={this.state.photo} alt='Image not Found'></img>
        <ul>
          <li>{info.default_price}</li>
          <li>Star Rating</li>
        </ul>
      </div>
    )
  }
}


export default RelatedCard;