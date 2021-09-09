import React from 'react';

const SubmitQuestionForm = (props) => {
  const CSSStyle = props.CSSStyle;
  return (
    <div id="QuestionForm" className={CSSStyle.modal}>
      <div className={CSSStyle.modalContent}>
      <span id="closeQuestionForm" className={CSSStyle.close} onClick={props.closeQuestionForm}><i className="far fa-times-circle"></i></span>
      <h2>This is where questions are submitted</h2>
      </div>
    </div>
  );
};

export default SubmitQuestionForm;
