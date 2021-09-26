import React from 'react';
import AnswersList from './AnswersList';
const $ = require('jquery');



const postRequest = function(rating, questionID) {
  $.ajax({
    url: `http://localhost:3000/rate/questions/${questionID}/${rating}`,
    type: 'PUT',
    success: (response) => {
      //console.log('PUT helpful/report response', response);
    },
    error: (error) => {
      console.log('PUT helpful/report error', error)
    },
  })
};

const QuestionEntry = (props) => {
  const CSSStyle = props.CSSStyle;
  //console.log(props.questionData);
  const rateQuestion = function(e) {
    let target = e.target.attributes.id.value;
    const questionID = target.slice(target.length - 6);
    target = target.slice(0, target.length - 6);;

    if (target === 'rate-question') {
      postRequest('helpful', questionID);

    } else if (target === 'report-question') {
      postRequest('report', questionID);
    }
  }

  return (
    <div id="question-entry" className={CSSStyle.questionEntry}>
      <h3 id={'question-' + props.questionData['question_id']}>Q: {props.questionData['question_body']}</h3>
      <div id="question-info">
          <p id={'rate-helpful-prompt-on-question-' + props.questionData['question_id']} className={CSSStyle.smallText}>Helpful?</p>
          <p id={'rate-question' + props.questionData['question_id']} className={CSSStyle.smallText} onClick={rateQuestion}>Yes</p>
          <p id={'helpfulness-rating-on-question-' + props.questionData['question_id']} className={CSSStyle.smallText}>({props.questionData['question_helpfulness']}) |</p>
          <p id={'report-question' + props.questionData['question_id']} className={CSSStyle.smallText} onClick={rateQuestion}>Report</p>
          <button id={'answer-form-btn-on-question-' + props.questionData['question_id']} onClick={props.openAnswerForm}>Add Answer</button>
        </div>
      <AnswersList CSSStyle={CSSStyle} answerList={props.questionData.answers} />
    </div>
  );
};

export default QuestionEntry;
