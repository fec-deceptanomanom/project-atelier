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

  render() {
    const starButton = (
      <div>
        <button onClick={() => {}} value='Star Button'>Star Button</button>
      </div>
    );
    let thumbnail = 'Loading';


    return(
      <div className={CSSLight.relatedCard}>
        <h2>Loading</h2>
        {starButton}
        <img src={thumbnail} alt='Loading' width='50'></img>

        <ul>
          <li>Product Category</li>
          <li>Product Name</li>
          <li>Price</li>
          <li>Star Rating</li>
        </ul>
      </div>
    )

  }
}
  // if (this.props.cardInfo.styleInfo.results[0].photos[0].thumbnail_url) {
  //   thumbnail = this.props.cardInfo.styleInfo.results[0].photos[0].thumbnail_url;
  // }

// if props.carInfo exists do b

// else depict message saying not founded


export default RelatedCard;