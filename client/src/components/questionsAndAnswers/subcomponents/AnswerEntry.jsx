import React from 'react';
const $ = require('jquery');
import PhotoZoom from './PhotoZoom';

const { URL_BASE } = require('../../../../../.secretURL.json');


class AnswerEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rated: false,
      reported: false,
      isSeller: false,
    };
    this.rateAnswer = this.rateAnswer.bind(this);
    this.photoZoom = this.photoZoom.bind(this);
  }

  componentDidMount() {
    if (this.props.answerData['answerer_name'] === 'Seller') {
      this.setState({ isSeller: true });
    }
  }

  photoZoom(e) {
    let modal = document.getElementById('zoomed-in-photo-div');
    modal.style.display = "block";
  }

  closeZoom(e) {
    let modal = document.getElementById('zoomed-in-photo-div');
    modal.style.display = "none";
  }

  postRequest(rating, answerID) {
    $.ajax({
      url: `${URL_BASE}/rate/answers/${answerID}/${rating}`,
      type: 'PUT',
      success: (response) => {
        //console.log('PUT helpful/report response', response);
      },
      error: (error) => {
        console.log('PUT helpful/report error', error)
      },
    })
  };

  formatDate(dateString) {
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

  rateAnswer(e) {
    const target = e.target.attributes.id.value;
    const answerID = this.props.answerData.id;
    console.log(target);

    if (target === 'rate-answer') {
      console.log('HELPFUL', answerID);
      this.postRequest('helpful', answerID);
      this.setState({ rated: true });

    } else if (target === 'report-answer') {
      //console.log('REPORT');
      this.postRequest('report', answerID);
      this.setState({ reported: true });
    }
  }

  render() {
    const CSSStyle = this.props.CSSStyle;
    //console.log('current answer data', props.answerData);
    const formattedDate = this.formatDate(this.props.answerData.date);
    const currentText = this.props.answerData.body;
    // bold username if Seller
    let userName = this.props.answerData['answerer_name'];
    if (this.state.isSeller === true) {
      userName = (<b>{this.props.answerData['answerer_name']}</b>)
    }
    // display photos if there are any
    let photosDiv = (
      <div id="answer-photos" className={CSSStyle['answer-photos-div']}>
        {this.props.answerData.photos.map((photo, index) => {
          return (
            <div id="photo-div" key={index} className={CSSStyle['photo-div']}>
              <img id="answer-photo" className={CSSStyle['answer-photo']} src={photo} onClick={this.photoZoom}></img>
              <PhotoZoom photo={photo} CSSStyle={CSSStyle} closeZoom={this.closeZoom}/>
            </div>
          )
      })}
    </div>
    )
    if (this.props.answerData.photos.length === 0) {
      photosDiv;
    }
    // disable rating and reporting if already done
    let rateThisAnswer = (<p id="rate-answer" className={[CSSStyle['small-text'], CSSStyle.rate].join(' ')} onClick={this.rateAnswer}>Yes</p>);
    let reportThisAnswer = (<p id="report-answer" className={[CSSStyle['small-text'], CSSStyle.report].join(' ')} onClick={this.rateAnswer}>Report</p>);
    if (this.state.rated === true) {
      rateThisAnswer = (<p id="rate-answer" className={[CSSStyle['small-text'], CSSStyle.rate].join(' ')}><i id="rated-answer-helpful-smiley" className="far fa-smile"></i></p>);
    }
    if (this.state.reported === true) {
      reportThisAnswer = (<p id="report-answer" className={[CSSStyle['small-text'], CSSStyle.report].join(' ')}>Reported</p>);
    }


    return (
      <div id="answer-entry" className={CSSStyle['answer-entry']}>
        <p id="answer-body" className={CSSStyle['answer-text']}>{currentText}</p>
        {photosDiv}
        <div id="answer-info" className={CSSStyle['rate-report']}>
          <p id="user-info" className={CSSStyle['small-text']}>By: {userName}, {formattedDate} | Helpful?</p>
          {rateThisAnswer}
          <p id="answer-rating" className={CSSStyle['small-text']}>({this.props.answerData.helpfulness}) |</p>
          {reportThisAnswer}
        </div>
      </div>
    )
  }
};

export default AnswerEntry;
