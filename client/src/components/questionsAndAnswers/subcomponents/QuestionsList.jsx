import React from 'react';
import QuestionEntry from './QuestionEntry';

const QuestionsList = (props) => {
  const CSSStyle = props.CSSStyle;
  return (
    <div className={CSSStyle.questionsList}>
      <QuestionEntry CSSStyle={CSSStyle} openAnswerForm={props.openAnswerForm}/>
      <QuestionEntry CSSStyle={CSSStyle} openAnswerForm={props.openAnswerForm}/>
    </div>
  );
};

export default QuestionsList;
