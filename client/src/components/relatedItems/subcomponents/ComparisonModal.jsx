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
    <div id='comparison-modal' className={style.modal}>
      <div className={style.modalContent}>
        <i className="fa fa-times-circle fa=lg"
          aria-hidden="true"
          onClick={props.toggleModal}>
        </i>
        <div>
          <h2>Comparison</h2>
          <table className={style.comparison}>
            <colgroup>
              <col></col>
              <col span="1" className="characteristic"></col>
              <col></col>
            </colgroup>
            <thead>
            <tr className={style.labels}>
              <th scope="col">Current Product</th>
              <th scope="col">Characteristic</th>
              <th scope="col">Compared Product</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td>{current.name}</td>
                <th scope="row">Name</th>
                <td>{clicked.name}</td>
              </tr>
              <tr>
                <td>{current.category}</td>
                <th scope="row">Dept</th>
                <td>{clicked.category}</td>
              </tr>
              <tr>
                <td>${current.price}</td>
                <th scope="row">Price</th>
                <td>${clicked.price}</td>
              </tr>
              <tr>
                <td>{currentRating}</td>
                <th scope="row">Rating</th>
                <td>{clickedRating}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

          export default ComparisonModal;