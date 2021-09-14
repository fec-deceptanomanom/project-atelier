import React from 'react';
import AnswersList from './AnswersList';


const QuestionEntry = (props) => {
  const CSSStyle = props.CSSStyle;
  //console.log(props.questionData);
  return (
    <div className={CSSStyle.questionEntry}>
      <h3>Q: {props.questionData["question_body"]}</h3>
      <div id="question-info">
          <p className={CSSStyle.smallText}>Helpful?</p>
          <p id="rate-question" className={CSSStyle.smallText}>Yes</p>
          <p id="question-rating" className={CSSStyle.smallText}>({props.questionData['question_helpfulness']}) |</p>
          <button id="AnswerFormBtn" onClick={props.openAnswerForm}>Add Answer</button>
        </div>
      <AnswersList CSSStyle={CSSStyle} answerList={props.questionData.answers} />
    </div>
  );
};

export default QuestionEntry;
