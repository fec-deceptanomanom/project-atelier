import React from 'react';
import QuestionEntry from './QuestionEntry';

const sortQuestions = function(questions) {
  questions.sort(function(a, b) {
    return b["question_helpfulness"] - a["question_helpfulness"];
  });
  return questions;
};


const QuestionsList = (props) => {
  const CSSStyle = props.CSSStyle;
  if (props.questionData.results.length >= 2) {
    const sortedQuestions = sortQuestions(props.questionData.results);
    let questionList = [sortedQuestions[0], sortedQuestions[1]];
    return (
      <div className={CSSStyle.questionsList}>
        {questionList.map((question, index) => {
          return <QuestionEntry key={index} CSSStyle={CSSStyle} questionData={question} openAnswerForm={props.openAnswerForm}/>
        })}
      </div>
    );
  } else if (props.questionData.results.length === 1) {
    return (
      <div className={CSSStyle.questionsList}>
        <QuestionEntry CSSStyle={CSSStyle} questionData={props.questionData.results[0]} openAnswerForm={props.openAnswerForm}/>
      </div>
    );
  } else {
    return (
      <div className={CSSStyle.questionsList}>
       <h5>Sorry, no one has asked any questions yet!</h5>
      </div>
    );
  }
};

export default QuestionsList;
