import React from 'react';
import AnswerEntry from './AnswerEntry';


const sortAnswers = function(answers) {
  answers.sort(function(a, b) {
    return b.helpfulness - a.helpfulness;
  });
  return answers;
};

const AnswersList = (props) => {
  const CSSStyle = props.CSSStyle;
  const answerValues = Object.values(props.answerList);
  //console.log('current question', answerValues);
  let moreAnswersButton = CSSStyle.disabledButton;
  let sortedAnswers;
  let answerList;
  if (answerValues.length > 2) {
    sortedAnswers = sortAnswers(answerValues);
    answerList = [sortedAnswers[0], sortedAnswers[1]];
    moreAnswersButton = CSSStyle.enabledButton;
  } else if (answerValues.length === 2 ) {
    sortedAnswers = sortAnswers(answerValues);
    answerList = [sortedAnswers[0], sortedAnswers[1]];
  } else if (answerValues.length === 1) {
    sortedAnswers = sortAnswers(answerValues);
    answerList = [sortedAnswers[0]];
  } else {
    answerList = null;
  }

  if (answerList === null) {
    return (
      <div id="AnswersList" className={CSSStyle.answersList}>
        <h5>Sorry, no onw has answered this question yet.</h5>
      </div>
    );
  } else {
    return (
      <div id="AnswersList" className={CSSStyle.answersList}>
        {answerList.map((answer, index) => {
          //console.log('answer', answer)
          return (<AnswerEntry key={index} answerData={answer} CSSStyle={CSSStyle} />)
        })}
        <button id="showMoreAnswers" className={moreAnswersButton}>This should show more answers (WIP)</button>
      </div>
    );
  }


};

export default AnswersList;
