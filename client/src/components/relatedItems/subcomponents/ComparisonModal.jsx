import React from 'react';
import style from './ComparisonModal.module.css';
import _ from 'underscore';
// need to go off of product/features
//fabric cut lenses uv protection, frames
//if feature is null replace with a checkmark
const ComparisonModal = (props) => {

  const currentFeatures = props.currentItem.product.features;
  const clickedFeatures = props.clickedItem.product.features;
  const bothFeaturesList = currentFeatures.concat(clickedFeatures);
  const allFeats = bothFeaturesList.map( (obj) => obj.feature );
  let uniqueFeats = [...new Set(allFeats)];
  uniqueFeats = Array.from(uniqueFeats);

  currentFeatures.forEach( obj => {
    if (obj.value === null) {
      obj.value = (<i className="fa fa-check-square-o" aria-hidden="true"></i>);
    }
  });
  clickedFeatures.forEach( obj => {
    if (obj.value === null) {
      obj.value = (<i className="fa fa-check-square-o" aria-hidden="true"></i>);
    }
  });

  // const numOfRows = uniqueFeats.length;
  console.log('clickedFeatures', clickedFeatures);
  console.log('currentFeatures', currentFeatures);
  //build an object that holds all table data

  console.log('uniqueFeats', (uniqueFeats));
  const tableData = uniqueFeats.map( (feat, i) => {
    let clickedFeat = clickedFeatures.filter( obj => obj.feature === uniqueFeats[i] )
    let currentFeat = currentFeatures.filter( obj => obj.feature === uniqueFeats[i] )
    console.log('line 36 clickedFeat is ', clickedFeat);

    return ({
        a: clickedFeat[0] ? clickedFeat[0].value : '',
        f: uniqueFeats[i],
        b: currentFeat[0] ? currentFeat[0].value : ''
      })
  })
  console.log('tableDATA is', tableData)
  // iterate over features and build rows
  const rows = tableData.map( (obj, ind) => {
    let trId = 'comparison-modal-table-row-' + ind;
    let td1Id = 'comparison-modal-table-td1' + ind;
    let th1Id = 'comparison-modal-table-th-' + ind;
    let td2Id = 'comparison-modal-table-td2-' + ind;


    return (<tr id={trId} key={ind}>
              <td id={td1Id}>{obj.a}</td>
              <th id={th1Id} scope="row">{obj.f}</th>
              <td id={td2Id}>{obj.b}</td>
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