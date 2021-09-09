import React from 'react';
import CSSLight from './styles/QandALight.module.css';
import CSSDark from './styles/QandADark.module.css';
import QuestionsList from './subcomponents/QuestionsList';
import SearchBar from './subcomponents/SearchBar';
import SubmitQuestionForm from './subcomponents/SubmitQuestionForm';
import SubmitAnswerForm from './subcomponents/SubmitAnswerForm';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkmode: false,
    };
    this.darkmodeToggle = this.darkmodeToggle.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
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

  darkmodeToggle() {
    const toggleState = !this.state.darkmode;
    this.setState({ darkmode: toggleState });
  }

  render() {
    let CSSStyle = CSSLight;
    if (this.state.darkmode === true) {
      CSSStyle = CSSDark;
    }
    return (
      <div id="QandA" className={CSSStyle.QandABox}>
        <h1 className={CSSStyle.testBanner}> Questions & Answers</h1>
        <label className={CSSStyle.switch}>
          <input onChange={this.darkmodeToggle} type="checkbox"></input>
          <span className={CSSStyle.slider}></span>
        </label>
        <SearchBar CSSStyle={CSSStyle} />
        <QuestionsList CSSStyle={CSSStyle} openAnswerForm={this.modalOpen} />
        <SubmitQuestionForm CSSStyle={CSSStyle} closeQuestionForm={this.modalClose}/>
        <SubmitAnswerForm CSSStyle={CSSStyle} closeAnswerForm={this.modalClose} />
        <div id="MoreQuestions" className={CSSStyle.moreQuestions}>
          <button id="moreQuestions">See More Questions (WIP)</button>
          <button id="QuestionFormBtn" onClick={this.modalOpen}>Ask A Question</button>
        </div>
      </div>
    );
  }
}

export default QuestionsAndAnswers;
