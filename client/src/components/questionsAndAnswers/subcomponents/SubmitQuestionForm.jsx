import React from 'react';

const SubmitQuestionForm = (props) => {
  const CSSStyle = props.CSSStyle;
  const component = 'Questions and Answers - Submit New Question';
  return (
    <div id="QuestionFormEmptySpace" className={CSSStyle.modal} onClick={props.onClick}>
      <div id="QuestionFormModal" className={CSSStyle.modalContent}>
        <span id="closeQuestionForm" className={CSSStyle.close} onClick={props.closeQuestionForm}><i id="close-answer-form" className="far fa-times-circle"></i></span>
        <h2 id="question-submission-heading">This is where questions are submitted</h2>
        <p id="question-submission-instructions" className={CSSStyle.smallText}>Fields marked with * are required</p>
        <form id="question-form" onSubmit={props.formSubmit}>
          <label id="question-email-label" htmlFor="question-email">*Email Address:</label><br></br>
          <input id="question-email" type="email" required="required"></input><br></br>
          <label id="question-nickname-label" htmlFor="question-nickname">*Nickname (does not have to be your real name):></label><br></br>
          <input id="question-nickname" type="textarea" required="required"></input><br></br>
          <label id="question-text-label" htmlFor="question-text">*Your Question:</label><br></br>
          <textarea id="question-text" required="required" rows="10"></textarea><br></br>
          <br></br>
          <input id="questions-form-submit" type="submit"></input>
        </form>
      </div>
    </div>
  );
};

export default SubmitQuestionForm;
