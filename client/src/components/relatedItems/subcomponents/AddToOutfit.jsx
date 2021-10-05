import React from 'react';
import CSSLight from './../relatedItemsLight.module.css';


const AddToOutfit = (props) => {
  // const plusIcon = <i className="icon-plus-sign"></i>;
  return (
    <div id='add-to-outfit-card' className={CSSLight.btnAdd}>
      <div id='plusIcon-container' className={CSSLight.plusIcon}>
        <i id='plusIcon-icon'
        className="fa fa-plus-square fa-4x"
        aria-hidden="true"
        onClick={props.handleClick}></i>
        {/* on click add pageItem info to outfitItems [] */}
        <p id='plusIcon-caption'>Add to outfit</p>
      </div>
    </div>
  )
}

export default AddToOutfit;