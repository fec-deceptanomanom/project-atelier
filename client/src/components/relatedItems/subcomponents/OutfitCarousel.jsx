import React from 'react';
import CSSLight from './../relatedItemsLight.module.css';

import OutfitCard from './OutfitCard.jsx';
import AddToOutfit from './AddToOutfit.jsx';

const OutfitCarousel = (props) => {

  let outfitItems = props.outfitItems || ['', '', ''];
  outfitItems = outfitItems.map( (item, i) => {
    return (
      <div className={CSSLight.card} key={i}>
        <OutfitCard />
      </div>
    )
  });
  // outfitItems ? : ;
  return (
    <div className={CSSLight.outfitCarousel}>
      <h2>Outfit Carousel</h2>
      <div className={CSSLight.scroller}>
          <AddToOutfit />
          {outfitItems}
      </div>
    </div>

  )
}

export default OutfitCarousel;