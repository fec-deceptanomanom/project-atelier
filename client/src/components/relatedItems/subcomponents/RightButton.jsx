import React from 'react';
import CSSLight from '../relatedItemsLight.module.css';

const RightButton = (props) => {
  if (!props.right) {
    return null;
  } else {
    return (
      <div id='right-btn'>
        <i id='right-icon'
          className="fa fa-arrow-right fa-3x"
          aria-hidden="true"
          onClick={props.handleClick}>
        </i>
    </div>
    )
  }
}

export default RightButton;