import React from 'react';

const formatDate = function(dateString) {
  let date = {
    year: dateString.slice(0, 4),
    month: dateString.slice(5, 7),
    day: dateString.slice(8, 10)
  }
  const monthList = {
    '01': 'January', '02': 'February', '03': 'March',
    '04': 'April', '05': 'May', '06': 'June',
    '07': 'July', '08': 'August', '09': 'September',
    '10': 'October', '11': 'November', '12': 'December'
  };
  date.month = monthList[date.month];
  //console.log(date);
  const formatted = date.month + ' ' + date.day + ', ' + date.year;
  return formatted;
};

const AnswerEntry = (props) => {
  const CSSStyle = props.CSSStyle;
  //console.log('current answer data', props.answerData);
  const formattedDate = formatDate(props.answerData.date);
  const currentText = props.answerData.body;
    return (
      <div className={CSSStyle.answerEntry}>
        <h3 id="answer-A">A: </h3>
        <p id="answer-text" className={CSSStyle.p}>{currentText}</p>
        <div id="answer-info">
          <p id="user-info" className={CSSStyle.smallText}>By: {props.answerData['answerer_name']}, {formattedDate} | Helpful?</p>
          <p id="rate-answer" className={CSSStyle.smallText}>Yes</p>
          <p id="answer-rating" className={CSSStyle.smallText}>({props.answerData.helpfulness}) |</p>
          <p id="report-answer" className={CSSStyle.smallText}>Report</p>
        </div>
      </div>
    );

};

export default AnswerEntry;
