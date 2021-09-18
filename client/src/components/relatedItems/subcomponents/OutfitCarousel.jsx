import React from 'react';
import CSSLight from './../relatedItemsLight.module.css';

import OutfitCard from './OutfitCard.jsx';
import AddToOutfit from './AddToOutfit.jsx';

const OutfitCarousel = (props) => {

  const OutfitCards = []; //map over OutfitCard.

  return (
    <div className={CSSLight.outfitCarousel}>
      <h2>Outfit Carousel</h2>
      <div>
        <AddToOutfit />
        {OutfitCards}
      </div>
    </div>

  )
}

export default OutfitCarousel;