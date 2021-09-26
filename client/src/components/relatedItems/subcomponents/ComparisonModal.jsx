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
      <div id='comparison-modal-content' className={style.modalContent}>
        <i id='comparison-modal-close'className="fa fa-times-circle fa=lg"
          aria-hidden="true"
          onClick={props.toggleModal}>
        </i>
        <div id='comparison-modal-table-container'>
          <h2 id='comparison-modal-h2'>Comparison</h2>
          <table id='comparison-modal-table'className={style.comparison}>
            <colgroup id='comparison-modal-table-colgroup'>
              <col id='comparison-modal-table-colgroup-caption'></col>
              <col id='comparison-modal-table-colgroup-caption' span="1" className="characteristic"></col>
              <col id='comparison-modal-table-colgroup-caption'></col>
            </colgroup>
            <thead id='comparison-modal-table-head'>
            <tr id='comparison-modal-table-row-labels' className={style.labels}>
              <th id='comparison-modal-table-th-current' scope="col">Current Product</th>
              <th id='comparison-modal-table-th-chars' scope="col">Characteristic</th>
              <th id='comparison-modal-table-th-compare' scope="col">Compared Product</th>
            </tr>
            </thead>
            <tbody id='comparison-modal-table-body'>
              <tr id='comparison-modal-table-row-name'>
                <td id='comparison-modal-table-td1name'>{current.name}</td>
                <th id='comparison-modal-table-th-name' scope="row">Name</th>
                <td id='comparison-modal-table-td2name'>{clicked.name}</td>
              </tr>
              <tr id='comparison-modal-table-row-category'>
                <td id='comparison-modal-table-td1category'>{current.category}</td>
                <th id='comparison-modal-table-th-category' scope="row">Dept</th>
                <td id='comparison-modal-table-td2category'>{clicked.category}</td>
              </tr>
              <tr id='comparison-modal-table-row-price'>
                <td id='comparison-modal-table-td1price'>${current.price}</td>
                <th id='comparison-modal-table-th-price' scope="row">Price</th>
                <td id='comparison-modal-table-td2price'>${clicked.price}</td>
              </tr>
              <tr id='comparison-modal-table-row-rating'>
                <td id='comparison-modal-table-td1rating'>{currentRating}</td>
                <th id='comparison-modal-table-th-price' scope="row">Rating</th>
                <td id='comparison-modal-table-td2rating'>{clickedRating}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

          export default ComparisonModal;