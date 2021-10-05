import React from 'react';
import style from './ComparisonModal.module.css';
// need to go off of product/features
//fabric cut lenses uv protection, frames
//if feature is null replace with a checkmark
const ComparisonModal = (props) => {

  const currentFeatures = props.currentItem.product.features;
  const clickedFeatures = props.clickedItem.product.features;
  const features = currentFeatures.concat(clickedFeatures);
  console.log(features)
  const numOfRows = features.length;

  //iterate over features and build rows
  const tableBody = (
    <tbody id='comparison-modal-table-body'>{rows}</tbody>
  )

  const rows = featurs.map( (feat, i) => {
    let trId = 'comparison-modal-table-row-' + {i};
    let tdId = 'comparison-modal-table-td1' + {i};
    let th1Id = 'comparison-modal-table-th-' + {i};
    let td2Id = 'comparison-modal-table-td2-' + {i};
    return (<tr id={trId}>
              <td id={th1Id}>{i}</td>
              <th id={tdId} scope="row">{feat}</th>
              <td id={th2Id}>{i}</td>
            </tr>);
  })
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
            {rows}
          </table>
        </div>
      </div>
    </div>
  )
}

          export default ComparisonModal;