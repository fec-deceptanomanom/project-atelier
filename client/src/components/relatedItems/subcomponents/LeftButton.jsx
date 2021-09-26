import React from 'react';
import CSSLight from '../relatedItemsLight.module.css';

const LeftButton = (props) => {
  if (!props.left) {
    return null;
  } else {
    return (
      <div id="left-btn">
        <i id='left-icon'
           className="fa fa-arrow-left fa-3x"
           aria-hidden="true"
           onClick={props.handleClick}>
        </i>
    </div>
    )
  }
}

export default LeftButton;