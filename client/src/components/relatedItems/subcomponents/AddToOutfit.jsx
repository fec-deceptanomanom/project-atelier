import React from 'react';
import CSSLight from './../relatedItemsLight.module.css';


const AddToOutfit = (props) => {
  const plusIcon = <i className="icon-plus-sign icon-2x pull-left"></i>;
  return (
    <div className={CSSLight.btnAdd}>
      {plusIcon}
      Add to OUTfit!!
    </div>
  )
}

export default AddToOutfit;