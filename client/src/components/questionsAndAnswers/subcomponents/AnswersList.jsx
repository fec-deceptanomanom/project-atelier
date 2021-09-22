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
      let button = document.getElementById('showMoreAnswers');
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

  sortAnswers = function(answers) {
    answers.sort(function(a, b) {
      return b.helpfulness - a.helpfulness;
    });
    return answers;
  };

  showAnotherAnswer = function(e) {
    let currentAnswers = this.state.displayedAnswers;
    const targetIndex = currentAnswers.length;
    const newAnswer = this.state.sortedAnswers[targetIndex];
    currentAnswers.push(newAnswer);
    this.setState({displayedAnswers: currentAnswers});
    if (currentAnswers.length === this.state.sortedAnswers.length) {
      let button = document.getElementById('showMoreAnswers');
      button.style.display = 'none';
    }
  };

  //console.log('current question', answerValues);

  render() {
    const CSSStyle = this.props.CSSStyle;
    const answerList = this.state.displayedAnswers;

    if (answerList === null) {
      return (
        <div id="AnswersList" className={CSSStyle.answersList}>
          <h5>Sorry, no onw has answered this question yet.</h5>
        </div>
      );
    } else {
      return (
        <div id="AnswersList" className={CSSStyle.answersList}>
          {answerList.map((answer, index) => {
            //console.log('answer', answer)
            return (<AnswerEntry key={index} answerData={answer} CSSStyle={CSSStyle} />)
          })}
          <button id="showMoreAnswers" className={CSSStyle.showMore} onClick={this.showAnotherAnswer} >This should show more answers (WIP)</button>
        </div>
      );
    }
  }
};

export default AnswersList;
