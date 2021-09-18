import React from 'react';
import CSSLight from '.././relatedItemsLight.module.css';
import CSSDark from '.././relatedItemsDark.module.css';

import ComparisonModal from './ComparisonModal.jsx';

class RelatedCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  findDefaultPhoto(results) {
    let defal = results.find( result => result['default?']);
    return defal.photos[0].thumbnail_url
  }

  render () {
    const starButton = (
      <div>
        <button onClick={() => {}} value='Star Button'>Star Button</button>
      </div>
    );
    const info = this.props.cardInfo.productInfo;
    const thumbnail = this.findDefaultPhoto(this.props.cardInfo.styleInfo.results);

    return (
      <div className={CSSLight.relatedCard}>
      <h2>{info.name}</h2>
      {starButton}
      <img src={thumbnail} alt='404'></img>
      {console.log(thumbnail)}
      <ul>
      <li>{info.category}</li>
      <li>{info.default_price}</li>
      <li>Star Rating</li>
      </ul>
      </div>
      )
  }
}


  export default RelatedCard;