import React from 'react';
import CSSLight from './../relatedItemsLight.module.css';

import OutfitCard from './OutfitCard.jsx';
import AddToOutfit from './AddToOutfit.jsx';

class Outfitlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    let outfits = this.props.outfits || ['', '', ''];

    outfits = outfits.map( (item, i) => {
      return (
        <div id='outfit-card-container' className={CSSLight.card} key={i}>
          <OutfitCard key={i} info={item}/>
        </div>
      )
    });

    return (
      <div id='outfit-list' className={CSSLight.outfitCarousel}>
        <h2 id='outfit-list-h2'>Outfit Carousel</h2>
        <div id='outfit-scroller' className={CSSLight.scroller}>
            <AddToOutfit pageItem={this.props.pageItem} handleClick={this.props.addOutfit}/>
            {outfits}
        </div>
      </div>
    )
  }
};

export default Outfitlist;