import React from 'react';
import AnswerEntry from './AnswerEntry';




class AnswersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedAnswers: [],
      twoOrLessAnswers: [],
      displayedAnswers: [],
    };
    this.showTwoAnswers = this.showTwoAnswers.bind(this);
    this.sortAnswers = this.sortAnswers.bind(this);
    this.showMoreAnswers = this.showMoreAnswers.bind(this);
    this.showFewerAnswers = this.showFewerAnswers.bind(this);
  };

  componentDidMount() {
    //console.log('PROPS', this.props);
    const answerValues = Object.values(this.props.answerList);
    const sortedList = this.sortAnswers(answerValues);

    this.showTwoAnswers(sortedList);
    this.setState({ sortedAnswers: sortedList });
  }

  showTwoAnswers(sortedAnswers) {
    const sortedList = sortedAnswers;
    let answerList;

    if (sortedList.length > 2) {
      answerList = [sortedList[0], sortedList[1]];
      let button = document.getElementById('show-more-answers' + this.props.questionID);
      button.style.display = 'inline-block';
    } else if (sortedList.length === 2 ) {
      answerList = [sortedList[0], sortedList[1]];
    } else if (sortedList.length === 1) {
      answerList = [sortedList[0]];
    } else {
      answerList = null;
    }
    this.setState({ displayedAnswers: answerList, twoOrLessAnswers: answerList });
  }

  sortAnswers(answers) {
    answers.sort(function(a, b) {
      return b.helpfulness - a.helpfulness;
    });
    // move "Seller" answers to top
    let sellerAnswer = [];
    for (let i = 0; i < answers.length; i++) {
      if (answers[i]['answerer_name'] === 'Seller') {
        sellerAnswer.push(answers[i]);
        let newAnswers = answers.slice(0, i).concat(answers.slice(i + 1));
        answers = newAnswers;
      }
    }
    answers = sellerAnswer.concat(answers);
    return answers;
  };

  showMoreAnswers(e) {
    this.setState({ displayedAnswers: this.state.sortedAnswers });
  };

  showFewerAnswers(e) {
    this.setState({ displayedAnswers: this.state.twoOrLessAnswers });
  }


  render() {
    const CSSStyle = this.props.CSSStyle;
    let answerList = this.state.displayedAnswers;
    let showMoreButton = (<button id={"show-more-answers" + this.props.questionID} className={CSSStyle.showMoreAnswers} onClick={this.showMoreAnswers} >Show More Answers</button>);
    if (this.state.displayedAnswers === this.state.sortedAnswers) {
      showMoreButton = (<button id={"show-fewer-answers" + this.props.questionID} className={CSSStyle.showMoreAnswers} onClick={this.showFewerAnswers} >Collapse Answers</button>);
    }

    if (answerList === null) {
      return (
        <div id="answers-list" className={CSSStyle.answersList}>
          <h3>Sorry, no one has answered this question yet.</h3>
        </div>
      );
    } else {
      return (
        <div id="answers-list" className={CSSStyle.answersList}>
          <h3 id="answer-A">A:</h3>
          {answerList.map((answer, index) => {
            //console.log('answer', answer)
            return (<AnswerEntry key={index} answerData={answer} CSSStyle={CSSStyle} />)
          })}
          {showMoreButton}
        </div>
      );
    }
  }
};

export default AnswersList;
