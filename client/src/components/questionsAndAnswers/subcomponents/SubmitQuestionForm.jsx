import React from 'react';

const SubmitQuestionForm = (props) => {
  const CSSStyle = props.CSSStyle;
  return (
    <div id="QuestionForm" className={CSSStyle.modal}>
      <div className={CSSStyle.modalContent}>
      <span id="closeQuestionForm" className={CSSStyle.close} onClick={props.closeQuestionForm}><i className="far fa-times-circle"></i></span>
      <h2>This is where questions are submitted</h2>
      <p className={CSSStyle.smallText}>Fields marked with * are required</p>
      <form id="question-form" onSubmit={props.formSubmit}>
        <label htmlFor="question-email">*Email Address:</label><br></br>
        <input id="question-email" type="email" required="required"></input><br></br>
        <label htmlFor="question-nickname">*Nickname (does not have to be your real name):></label><br></br>
        <input id="question-nickname" type="textarea" required="required"></input><br></br>
        <label htmlFor="question-text">*Your Question:</label><br></br>
        <textarea id="question-text" required="required" rows="10"></textarea><br></br>
        <br></br>
        <input type="submit"></input>
      </form>
      </div>
    </div>
  );
};

export default SubmitQuestionForm;
