import React from 'react';
import AnswersList from './AnswersList';
const $ = require('jquery');
const { URL_BASE } = require('../../../../../.secret.json');




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
      this.postRequest('helpful', questionID);
      this.setState({ rated: true })
    } else if (process === 'report-question') {
      this.postRequest('report', questionID);
      this.setState({ reported: true });
    }
  }

  postRequest(rating, questionID) {
    $.ajax({
      url: `${URL_BASE}/rate/questions/${questionID}/${rating}`,
      type: 'PUT',
      success: (response) => {
        //console.log('PUT helpful/report response', response);
      },
      error: (error) => {
        console.log('PUT helpful/report error', error)
      },
    })
  };

  render() {
    const CSSStyle = this.props.CSSStyle;
    const questionID = this.props.questionData['question_id'];
    let rateThisQuestion = (<p id={'rate-question' + questionID} className={[CSSStyle['small-text'], CSSStyle.rate].join(' ')} onClick={this.rateQuestion}>Yes</p>);
    let reportThisQuestion = (<p id={'report-question' + questionID} className={[CSSStyle['small-text'], CSSStyle.report].join(' ')} onClick={this.rateQuestion}>Report</p>);
    if (this.state.rated === true) {
      rateThisQuestion = (<p id={'rate-question' + this.props.questionData['question_id']} className={[CSSStyle['small-text'], CSSStyle.rate].join(' ')}><i id="rated-question-helpful-smiley" className="far fa-smile"></i></p>);
    }
    if (this.state.reported === true) {
      reportThisQuestion = (<p id={'report-question' + this.props.questionData['question_id']} className={[CSSStyle['small-text'], CSSStyle.report].join(' ')}>Reported</p>);
    }

    return (
    <div id="question-entry" className={CSSStyle['question-entry']}>
      <h3 id={'question-' + questionID}>Q: {this.props.questionData['question_body']}</h3>
      <div id="question-info" className={CSSStyle['rate-report']}>
          <p id={'rate-helpful-prompt-on-question-' + this.props.questionData['question_id']} className={CSSStyle['small-text']}>Helpful?</p>
          {rateThisQuestion}
          <p id={'helpfulness-rating-on-question-' + this.props.questionData['question_id']} className={CSSStyle['small-text']}>({this.props.questionData['question_helpfulness']}) |</p>
          {reportThisQuestion}
          <button id={'answer-form-btn-on-question-' + questionID} onClick={this.props.openAnswerForm}>Add Answer</button>
        </div>
      <AnswersList CSSStyle={CSSStyle} answerList={this.props.questionData.answers} />
    </div>
    )
  }
};

export default QuestionEntry;
