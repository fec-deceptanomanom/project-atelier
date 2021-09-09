import React from 'react';

const SubmitAnswerForm = (props) => {
  const CSSStyle = props.CSSStyle;
  return (
    <div id="AnswerForm" className={CSSStyle.modal}>
      <div className={CSSStyle.modalContent}>
      <span id="closeAnswerForm" className={CSSStyle.close} onClick={props.closeAnswerForm}><i className="far fa-times-circle"></i></span>
      <h2>This is where answers are submitted</h2>
      </div>
    </div>
  );
};

export default SubmitAnswerForm;
