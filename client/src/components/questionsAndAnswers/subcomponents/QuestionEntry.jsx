import React from 'react';
import AnswersList from './AnswersList';


const QuestionEntry = (props) => {
  const CSSStyle = props.CSSStyle;
  //console.log(props.questionData);
  return (
    <div id="question-entry" className={CSSStyle.questionEntry}>
      <h3 id={'question-' + props.questionData['question_id']}>Q: {props.questionData['question_body']}</h3>
      <div id="question-info">
          <p id={'rate-helpful-prompt-on-question-' + props.questionData['question_id']} className={CSSStyle.smallText}>Helpful?</p>
          <p id={'rate-helpful-on-question-' + props.questionData['question_id']} className={CSSStyle.smallText}>Yes</p>
          <p id={'helpfulness-rating-on-question-' + props.questionData['question_id']} className={CSSStyle.smallText}>({props.questionData['question_helpfulness']}) |</p>
          <button id="answer-form-btn" onClick={props.openAnswerForm}>Add Answer</button>
        </div>
      <AnswersList CSSStyle={CSSStyle} answerList={props.questionData.answers} />
    </div>
  );
};

export default QuestionEntry;
