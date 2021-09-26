import React from 'react';
import CSSLight from './../relatedItemsLight.module.css';

import OutfitCard from './OutfitCard.jsx';
import AddToOutfit from './AddToOutfit.jsx';

const Outfitlist = (props) => {

  let outfitItems = props.outfitItems || ['', '', ''];
  outfitItems = outfitItems.map( (item, i) => {
    return (
      <div id='outfit-card-container' className={CSSLight.card} key={i}>
        <OutfitCard />
      </div>
    )
  });
  // outfitItems ? : ;
  return (
    <div id='outfit-list' className={CSSLight.outfitCarousel}>
      <h2 id='outfit-list-h2'>Outfit Carousel</h2>
      <div id='outfit-scroller' className={CSSLight.scroller}>
          <AddToOutfit />
          {outfitItems}
      </div>
    </div>

  )
}

export default Outfitlist;