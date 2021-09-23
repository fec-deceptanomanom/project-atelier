import React from 'react';
import CSSLight from './../relatedItemsLight.module.css';


const AddToOutfit = (props) => {
  // const plusIcon = <i className="icon-plus-sign"></i>;
  return (
    <div className={CSSLight.btnAdd}>
      <div className={CSSLight.plusIcon}>
        <i className="fa fa-plus-square fa-4x" aria-hidden="true"></i>
        <p>Add to outfit</p>
      </div>
    </div>
  )
}

export default AddToOutfit;