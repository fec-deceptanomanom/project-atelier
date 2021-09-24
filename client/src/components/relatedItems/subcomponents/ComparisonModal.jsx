import React from 'react';
import style from './ComparisonModal.module.css';

const ComparisonModal = (props) => {
  const clickedStars = props.clickedItem.reviews.ratings;
  const currentStars = props.currentItem.reviews.ratings;
  // console.log('stars', stars)
  const clickedRating = props.stars(clickedStars);
  const currentRating = props.stars(currentStars);

  const current = {
    name: props.currentItem.product.name,
    category: props.currentItem.product.category,
    price: props.currentItem.product.default_price,
    currentRating
  };

  const clicked = {
    name: props.clickedItem.product.name,
    category: props.clickedItem.product.category,
    price: props.clickedItem.product.default_price,
    clickedRating

  };
  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <i className="fa fa-times-circle fa=lg"
          //  className={style.close}
           aria-hidden="true"
           onClick={props.toggleModal}></i>
        <table>
          <tbody>
            <tr>
              <th>Current Product</th>
              <th>Characteristic</th>
              <th>Compared Product</th>
            </tr>
            <tr>
              <td>{current.name}</td>
              <td>Name</td>
              <td>{clicked.name}</td>
            </tr>
            <tr>
              <td>{current.category}</td>
              <td>Dept</td>
              <td>{clicked.category}</td>
            </tr>
            <tr>
              <td>{current.price}</td>
              <td>Price</td>
              <td>{clicked.price}</td>
            </tr>
            <tr>
              <td>{currentRating}</td>
              <td>Rating</td>
              <td>{clickedRating}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ComparisonModal;