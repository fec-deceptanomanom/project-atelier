import React from 'react';
import AnswersList from './AnswersList';
const $ = require('jquery');



const postRequest = function(rating, questionID) {
  $.ajax({
    url: `http://localhost:3000/rate/questions/${questionID}/${rating}`,
    type: 'PUT',
    success: (response) => {
      //console.log('PUT helpful/report response', response);
    },
    error: (error) => {
      console.log('PUT helpful/report error', error)
    },
  })
};

class QuestionEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reported: false,
      rated: false,
    };
    this.rateQuestion = this.rateQuestion.bind(this);
  }

  rateQuestion(e) {
    let target = e.target.attributes.id.value;
    const questionID = target.slice(target.length - 6);
    const process = target.slice(0, target.length - 6);;
    const targetElement = e.target;

    if (process === 'rate-question') {
      postRequest('helpful', questionID);
      this.setState({ rated: true })
    } else if (process === 'report-question') {
      postRequest('report', questionID);
      this.setState({ reported: true });
    }
  }

  render() {
    const CSSStyle = this.props.CSSStyle;
    const questionID = this.props.questionData['question_id'];
    let rateThisQuestion = (<p id={'rate-question' + questionID} className={CSSStyle.smallText} onClick={this.rateQuestion}>Yes</p>);
    let reportThisQuestion = (<p id={'report-question' + questionID} className={CSSStyle.smallText} onClick={this.rateQuestion}>Report</p>);
    if (this.state.rated === true) {
      rateThisQuestion = (<p id={'rate-question' + this.props.questionData['question_id']} className={CSSStyle.smallText}><i id="rated-question-helpful-smiley" className="far fa-smile"></i></p>);
    }
    if (this.state.reported === true) {
      reportThisQuestion = (<p id={'report-question' + this.props.questionData['question_id']} className={CSSStyle.smallText}>Reported</p>);
    }

    return (
    <div id="question-entry" className={CSSStyle.questionEntry}>
      <h3 id={'question-' + questionID}>Q: {this.props.questionData['question_body']}</h3>
      <div id="question-info">
          <p id={'rate-helpful-prompt-on-question-' + this.props.questionData['question_id']} className={CSSStyle.smallText}>Helpful?</p>
          {rateThisQuestion}
          <p id={'helpfulness-rating-on-question-' + this.props.questionData['question_id']} className={CSSStyle.smallText}>({this.props.questionData['question_helpfulness']}) |</p>
          {reportThisQuestion}
          <button id={'answer-form-btn-on-question-' + questionID} onClick={this.props.openAnswerForm}>Add Answer</button>
        </div>
      <AnswersList CSSStyle={CSSStyle} answerList={this.props.questionData.answers} />
    </div>
    )
  }
};

export default QuestionEntry;
