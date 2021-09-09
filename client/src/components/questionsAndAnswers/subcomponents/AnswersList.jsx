import React from 'react';
import AnswerEntry from './AnswerEntry';

const AnswersList = (props) => {
  const CSSStyle = props.CSSStyle;

  return (
    <div id="AnswersList" className={CSSStyle.answersList}>
      <h4>Here are your answers:</h4>
      <AnswerEntry CSSStyle={CSSStyle} />
      <AnswerEntry CSSStyle={CSSStyle} />
      <button id="showMoreAnswers">This should show more answers (WIP)</button>
    </div>
  );
};

export default AnswersList;
