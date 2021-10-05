import React from 'react';
import style from './ComparisonModal.module.css';
import _ from 'underscore';
// need to go off of product/features
//fabric cut lenses uv protection, frames
//if feature is null replace with a checkmark
const ComparisonModal = (props) => {

  const currentFeatures = props.currentItem.product.features;
  const clickedFeatures = props.clickedItem.product.features;
  const featKeys = Object.keys(currentFeatures);
  featKeys.concat(Object.keys(clickedFeatures));
  featKeys = _.uniq(featKeys); //should have array of each feature for the table rows
  console.log(featKeys)
  const numOfRows = featKeys.length;

  //iterate over features and build rows
  const rows = featKeys.map( (feat, ind) => {
    let trId = 'comparison-modal-table-row-' + ind;
    let tdId = 'comparison-modal-table-td1' + ind;
    let th1Id = 'comparison-modal-table-th-' + ind;
    let td2Id = 'comparison-modal-table-td2-' + ind;
    if (clickedFeatures[feat] === null) {
      clickedFeatures[feat] = 'Xmark';
    }

    return (<tr id={trId} key={ind}>
              <td id={th1Id}>{clickedFeatures[feat]}</td>
              <th id={tdId} scope="row">{feat}</th>
              {console.log('ind is ', ind)}
              <td id={th2Id}>{currentFeatures[feat]}</td>
            </tr>);
  });

  const tableBody = (
    <tbody id='comparison-modal-table-body'>{rows}</tbody>
  )

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
              <th id='comparison-modal-table-th-current' scope="col">{props.currentItem.product.name}</th>
              <th id='comparison-modal-table-th-chars' scope="col">Characteristic</th>
              <th id='comparison-modal-table-th-compare' scope="col">{props.clickedItem.product.name}</th>
            </tr>
            </thead>
            {tableBody}
          </table>
        </div>
      </div>
    </div>
  )
}

          export default ComparisonModal;