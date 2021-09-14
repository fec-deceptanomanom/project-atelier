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
  const sortedAnswers = sortAnswers(answerValues);
  const answerList = [sortedAnswers[0]];
  let moreAnswersButton = CSSStyle.disabledButton;
  if (sortedAnswers.length > 1) {
    answerList.push(sortedAnswers[1])
  }
  if (sortedAnswers.length > 2) {
    moreAnswersButton = CSSStyle.enabledButton;
  }
  return (
    <div id="AnswersList" className={CSSStyle.answersList}>
      {answerList.map((answer, index) => {
        //console.log('answer', answer)
        return (<AnswerEntry key={index} answerData={answer} CSSStyle={CSSStyle} />)
      })}
      <button id="showMoreAnswers" className={moreAnswersButton}>This should show more answers (WIP)</button>
    </div>
  );
};

export default AnswersList;
