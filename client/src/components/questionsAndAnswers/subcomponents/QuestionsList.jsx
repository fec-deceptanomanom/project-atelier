import React from 'react';
import QuestionEntry from './QuestionEntry';


const QuestionsList = (props) => {
  const CSSStyle = props.CSSStyle;
   console.log('incoming', props.questionData);
  if (props.questionData.length >= 2) {
    return (
      <div id="QuestionsList" className={CSSStyle.questionsList}>
        {props.questionData.map((question, index) => {
          return <QuestionEntry key={index} CSSStyle={CSSStyle} questionData={question} openAnswerForm={props.openAnswerForm}/>
        })}
      </div>
    );
  } else if (props.questionData.length === 1) {
    return (
      <div id="QuestionsList" className={CSSStyle.questionsList}>
        <QuestionEntry CSSStyle={CSSStyle} questionData={props.questionData[0]} openAnswerForm={props.openAnswerForm}/>
      </div>
    );
  } else {
    return (
      <div id="QuestionsList" className={CSSStyle.questionsList}>
       <h5>Sorry, no one has asked any questions yet!</h5>
      </div>
    );
  }
};

export default QuestionsList;
