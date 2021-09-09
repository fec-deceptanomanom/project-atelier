import React from 'react';
import AnswersList from './AnswersList';

const QuestionEntry = (props) => {
  const CSSStyle = props.CSSStyle;
  return (
    <div className={CSSStyle.questionEntry}>
      <h3>This is a sample question.</h3>
      <p className={CSSStyle.p}>This is a sample question's expanded text</p>
      <button id="AnswerFormBtn" onClick={props.openAnswerForm}>Answer Question</button>
      <AnswersList CSSStyle={CSSStyle} />
    </div>
  );
};

export default QuestionEntry;
