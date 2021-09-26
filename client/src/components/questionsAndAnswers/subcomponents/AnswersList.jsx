import React from 'react';
import AnswerEntry from './AnswerEntry';




class AnswersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedAnswers: [],
      displayedAnswers: [],
    };
    this.showAnotherAnswer = this.showAnotherAnswer.bind(this);
  };

  componentDidMount() {
    //console.log('PROPS', this.props);
    const answerValues = Object.values(this.props.answerList);
    let  answerList, sortedList;

    if (answerValues.length > 2) {
      sortedList = this.sortAnswers(answerValues);
      answerList = [sortedList[0], sortedList[1]];
      let button = document.getElementById('show-more-answers' + this.props.questionID);
      button.style.display = 'inline-block';
    } else if (answerValues.length === 2 ) {
      sortedList = this.sortAnswers(answerValues);
      answerList = [sortedList[0], sortedList[1]];
    } else if (answerValues.length === 1) {
      sortedList = this.sortAnswers(answerValues);
      answerList = [sortedList[0]];
    } else {
      answerList = null;
    }

    this.setState({
      sortedAnswers: sortedList,
      displayedAnswers: answerList,
    });
  }

  sortAnswers(answers) {
    answers.sort(function(a, b) {
      return b.helpfulness - a.helpfulness;
    });
    return answers;
  };

  showAnotherAnswer(e) {
    let currentAnswers = this.state.displayedAnswers;
    const targetIndex = currentAnswers.length;
    const newAnswer = this.state.sortedAnswers[targetIndex];
    currentAnswers.push(newAnswer);
    this.setState({displayedAnswers: currentAnswers});
    if (currentAnswers.length === this.state.sortedAnswers.length) {
      let button = document.getElementById('show-more-answers' + this.props.questionID);
      button.style.display = 'none';
    }
  };


  render() {
    const CSSStyle = this.props.CSSStyle;
    const answerList = this.state.displayedAnswers;

    if (answerList === null) {
      return (
        <div id="answers-list" className={CSSStyle.answersList}>
          <h5>Sorry, no one has answered this question yet.</h5>
        </div>
      );
    } else {
      return (
        <div id="answers-list" className={CSSStyle.answersList}>
          {answerList.map((answer, index) => {
            //console.log('answer', answer)
            return (<AnswerEntry key={index} answerData={answer} CSSStyle={CSSStyle} />)
          })}
          <button id={"show-more-answers" + this.props.questionID} className={CSSStyle.showMoreAnswers} onClick={this.showAnotherAnswer} >Show More Answers</button>
        </div>
      );
    }
  }
};

export default AnswersList;
