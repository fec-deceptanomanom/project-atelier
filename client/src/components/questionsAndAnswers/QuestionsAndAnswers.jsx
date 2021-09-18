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
      formTarget: null,
      productID: null,
    };
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.postForm = this.postForm.bind(this);
  }

  componentDidMount() {
    this.setState({
      darkmode: this.props.darkmode,
      productID: this.props.questionsList['product_id'],
    })
  }

  componentDidUpdate(prevprops) {
    if (this.props.darkmode !== prevprops.darkmode) {
      this.setState({ darkmode: this.props.darkmode })
    }
  }

  modalOpen(e) {
    const target = e.target.attributes.id.value;
    let modal;
    if (target === 'AnswerFormBtn') {
      modal = document.getElementById('AnswerForm');
      const targetName = e.target.parentElement.parentElement.children[0].attributes.id.value.slice(9);
      console.log('CLICKED', targetName);
      this.setState({formTarget: targetName})
    } else if (target === 'QuestionFormBtn') {
      modal = document.getElementById('QuestionForm');
      const targetName = this.state.productID;
      this.setState({formTarget: targetName})
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
    this.setState({formTarget: null})
  }

  // mock POST function that actually belongs in app.jsx
  postForm(e) {
    e.preventDefault();
    let data = {};
    // if answer form
    data.body = document.getElementById('answer-text').value;
    data.name = document.getElementById('answer-nickname').value;
    data.email = document.getElementById('answer-email').value;
    data.photos = document.getElementById('photo-upload').value;
    console.log(data);
    // else if question form
  }


  render() {
    let CSSStyle = CSSLight;
    if (this.state.darkmode === true) {
      CSSStyle = CSSDark;
    }
    //console.log('props', this.props.questionsList);
    return (
      <div id="QandA" className={CSSStyle.QandABox}>
        <h1 className={CSSStyle.testBanner}> Questions & Answers</h1>
        <SearchBar CSSStyle={CSSStyle} />
        <QuestionsList CSSStyle={CSSStyle} openAnswerForm={this.modalOpen} questionData={this.props.questionsList} />
        <SubmitQuestionForm CSSStyle={CSSStyle} formSubmit={this.postForm} closeQuestionForm={this.modalClose}/>
        <SubmitAnswerForm CSSStyle={CSSStyle} formSubmit={this.postForm} closeAnswerForm={this.modalClose} />
        <div id="MoreQuestions" className={CSSStyle.moreQuestions}>
          <button id="moreQuestions">More Answered Questions (WIP)</button>
          <button id="QuestionFormBtn" onClick={this.modalOpen}>Add A Question <i className="fas fa-plus"></i></button>
        </div>
      </div>
    );
  }
}

export default QuestionsAndAnswers;
