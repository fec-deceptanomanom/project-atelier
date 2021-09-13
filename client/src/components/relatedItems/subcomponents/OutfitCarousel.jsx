import React from 'react';
import OutfitCard from './OutfitCard.jsx';
import AddToOutfit from './AddToOutfit.jsx';

const OutfitCarousel = (props) => {

  const OutfitCards = []; //map over OutfitCard.

  return (
    <div>
      <h2>Outfit Carousel</h2>
      <div>
        <AddToOutfit />
        {OutfitCards}
      </div>
    </div>

  )
}

export default OutfitCarousel;