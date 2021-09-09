import React from 'react';

const AnswerEntry = (props) => {
  const CSSStyle = props.CSSStyle;
  return (
    <div className={CSSStyle.answerEntry}>
      <h5>Test Answer</h5>
      <p className={CSSStyle.p}>This is a test answer's text.</p>
    </div>
  );
};

export default AnswerEntry;
