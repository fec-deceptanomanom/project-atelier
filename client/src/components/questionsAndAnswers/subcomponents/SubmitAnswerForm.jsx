import React from 'react';

const SubmitAnswerForm = (props) => {
  const CSSStyle = props.CSSStyle;
  return (
    <div id="AnswerForm" className={CSSStyle.modal}>
      <div className={CSSStyle.modalContent}>
      <span id="closeAnswerForm" className={CSSStyle.close} onClick={props.closeAnswerForm}><i className="far fa-times-circle"></i></span>
      <h2>This is where answers are submitted</h2>
      <p className={CSSStyle.smallText}>Fields marked with * are required</p>
      <form id="answer-form" onSubmit={props.formSubmit}>
        <label htmlFor="answer-email">*Email Address:</label><br></br>
        <input id="answer-email" type="email" required="required"></input><br></br>
        <label htmlFor="answer-nickname">*Nickname (does not have to be your real name):></label><br></br>
        <input id="answer-nickname" type="textarea" required="required"></input><br></br>
        <label htmlFor="answer-text">*Your Answer:</label><br></br>
        <textarea id="answer-text" required="required" rows="10"></textarea><br></br>
        <label htmlFor="photo-upload">Upload a Photo:</label><br></br>
        <input id="photo-upload" type="file" multiple></input><br></br>
        <br></br>
        <input type="submit"></input>
      </form>
      </div>
    </div>
  );
};

export default SubmitAnswerForm;
