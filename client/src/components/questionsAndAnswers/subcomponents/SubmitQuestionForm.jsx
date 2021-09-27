import React from 'react';

const SubmitQuestionForm = (props) => {
  const CSSStyle = props.CSSStyle;
  const component = 'Questions and Answers - Submit New Question';
  return (
    <div id="submit-new-question-form" className={CSSStyle.modal} onClick={props.onClick}>
      <div id="question-form-modal" className={CSSStyle.modalContent}>
        <span id="close-question-form-span" className={CSSStyle.close} onClick={props.closeQuestionForm}><i id="close-question-form" className="far fa-times-circle"></i></span>
        <h2 id="question-submission-title">Ask Your Question</h2>
        <h3 id="question-submission-subtitle">About the {props.productName}</h3>
        <p id="question-submission-instructions" className={CSSStyle.smallText}>Fields marked with * are required</p>
        <form id="question-form" onSubmit={props.formSubmit}>
          <label id="question-email-label" htmlFor="question-email">* Your Email:</label><br></br>
          <input id="question-email" type="email" required="required" maxLength="60" placeholder="Example: jack@email.com"></input><br></br>
          <p id="question-email-instructions">For authentication reasons; you will not be emailed.</p><br></br>
          <label id="question-nickname-label" htmlFor="question-nickname">* Your Nickname:</label><br></br>
          <input id="question-nickname" type="textarea" required="required" maxLength="60" placeholder="Example: jackson11!"></input>
          <p id="question-nickname-instructions">For privacy reasons, do not use your full name or email address.</p><br></br>
          <label id="question-text-label" htmlFor="question-text">* Your Question:</label><br></br>
          <textarea id="question-text" required="required" rows="10" maxLength="1000"></textarea><br></br>
          <br></br>
          <input id="questions-form-submit" type="submit"></input>
        </form>
      </div>
    </div>
  );
};

export default SubmitQuestionForm;
