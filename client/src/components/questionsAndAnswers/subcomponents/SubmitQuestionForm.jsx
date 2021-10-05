import React from 'react';

const SubmitQuestionForm = (props) => {
  const CSSStyle = props.CSSStyle;
  const component = 'Questions and Answers - Submit New Question';
  return (
    <div id="submit-new-question-form" className={[CSSStyle.modal, CSSStyle['question-form']].join(' ')} onClick={props.onClick}>
      <div id="question-form-modal" className={CSSStyle['modal-content']}>
        <span id="close-question-form-span" className={CSSStyle.close} aria-label="Close" onClick={props.closeQuestionForm}><i id="close-question-form" className="far fa-times-circle"></i></span>
        <h2 id="question-submission-title">Ask Your Question</h2>
        <h3 id="question-submission-subtitle">About the {props.productName}</h3>
        <p id="question-submission-instructions" className={CSSStyle['modal-text']}>Fields marked with * are required</p>
        <form id="question-form" onSubmit={props.formSubmit}>
          <label id="question-email-label" htmlFor="question-email">* Your Email:</label><br></br>
          <input id="question-email" className={CSSStyle['modal-input']} type="email" required="required" maxLength="60" placeholder="Example: jack@email.com"></input><br></br>
          <p id="question-email-instructions">For authentication reasons; you will not be emailed.</p><br></br>
          <label id="question-nickname-label" htmlFor="question-nickname">* Your Nickname:</label><br></br>
          <input id="question-nickname" className={CSSStyle['modal-input']} type="textarea" required="required" maxLength="60" placeholder="Example: jackson11!"></input>
          <p id="question-nickname-instructions">For privacy reasons, do not use your full name or email address.</p><br></br>
          <label id="question-text-label" htmlFor="question-text">* Your Question:</label><br></br>
          <textarea id="question-text" className={CSSStyle['modal-textarea']} required="required" rows="10" maxLength="1000"></textarea><br></br>
          <br></br>
          <input id="questions-form-submit" className={CSSStyle['submit-button']} aria-label="Submit" type="submit"></input>
        </form>
      </div>
    </div>
  );
};

export default SubmitQuestionForm;
