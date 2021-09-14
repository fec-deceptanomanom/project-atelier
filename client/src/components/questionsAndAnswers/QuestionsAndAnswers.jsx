import React from 'react';
import CSSLight from './styles/QandALight.module.css';
import CSSDark from './styles/QandADark.module.css';
import QuestionsList from './subcomponents/QuestionsList';
import SearchBar from './subcomponents/SearchBar';
import SubmitQuestionForm from './subcomponents/SubmitQuestionForm';
import SubmitAnswerForm from './subcomponents/SubmitAnswerForm';
import dummyData from './dummyData';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkmode: props.darkmode,
      questionData: dummyData.questionList,
      answerData: dummyData.answerList,
    };
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
  }

  componentDidUpdate(prevprops) {
    if (this.props.darkmode !== prevprops.darkmode) {
      this.setState({ darkmode: this.props.darkmode })
    }
    if (this.props.questionData !== prevprops.questionData) {
      this.setState({ questionData: this.props.questionData })
    }
  }

  modalOpen(e) {
    const target = e.target.attributes.id.value;
    //console.log('CLICKED', target);
    let modal;
    if (target === 'AnswerFormBtn') {
      modal = document.getElementById('AnswerForm');
    } else if (target === 'QuestionFormBtn') {
      modal = document.getElementById('QuestionForm');
    }
    modal.style.display = "block";
  }

  modalClose(e) {
    const target = e.target.parentElement.attributes.id.value;
    //console.log('CLICKED', target);
    let modal;
    if (target === 'closeAnswerForm') {
      modal = document.getElementById('AnswerForm');
    } else if (target === 'closeQuestionForm') {
      modal = document.getElementById('QuestionForm');
    }
    modal.style.display = "none";
  }


  render() {
    let CSSStyle = CSSLight;
    if (this.state.darkmode === true) {
      CSSStyle = CSSDark;
    }
    return (
      <div id="QandA" className={CSSStyle.QandABox}>
        <h1 className={CSSStyle.testBanner}> Questions & Answers</h1>
        <SearchBar CSSStyle={CSSStyle} />
        <QuestionsList CSSStyle={CSSStyle} openAnswerForm={this.modalOpen} questionData={this.state.questionData} answerData={this.state.answerData} />
        <SubmitQuestionForm CSSStyle={CSSStyle} closeQuestionForm={this.modalClose}/>
        <SubmitAnswerForm CSSStyle={CSSStyle} closeAnswerForm={this.modalClose} />
        <div id="MoreQuestions" className={CSSStyle.moreQuestions}>
          <button id="moreQuestions">More Answered Questions (WIP)</button>
          <button id="QuestionFormBtn" onClick={this.modalOpen}>Add A Question <i className="fas fa-plus"></i></button>
        </div>
      </div>
    );
  }
}

export default QuestionsAndAnswers;
