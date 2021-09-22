import React from 'react';
import CSSLight from './styles/QandALight.module.css';
import CSSDark from './styles/QandADark.module.css';
import QuestionsList from './subcomponents/QuestionsList';
import SearchBar from './subcomponents/SearchBar';
import SubmitQuestionForm from './subcomponents/SubmitQuestionForm';
import SubmitAnswerForm from './subcomponents/SubmitAnswerForm';
const $ = require('jquery');

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkmode: false,
      formTarget: null,
      productID: null,
      questions: [],
      displayError: null,
    };
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.questionSearch = this.questionSearch.bind(this);
    this.searchUpdate = this.searchUpdate.bind(this);
    this.searchEnter = this.searchEnter.bind(this);
  }

  componentDidMount() {
    // GET request for questions
    const urlId = window.location.href.split('/p/')[1].replace('/', '');
    $.get(`http://localhost:3000/questions/${urlId}`, (data, status) => {
      console.log('get request question data', data);
      this.setState({
        questions: data.results,
        productID: data['product_id'],
        displayError: null,
      });
    })
    .fail((error) => {
      this.setState({
        displayError: {
          status: error.status,
          message: error.statusText
        }
      });
    });
    // other states to set
    this.setState({
      darkmode: this.props.darkmode,
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

  // incomplete POST function
  submitForm(e) {
    e.preventDefault();
    console.log('form target', this.state.formTarget);
    let data = {};
    // if question form
    if (this.state.formTarget === this.state.productID) {
      data.body = document.getElementById('question-text').value;
      data.name = document.getElementById('question-nickname').value;
      data.email = document.getElementById('question-email').value;
      data.product_id = this.state.productID;
      console.log('question form data', data);

    // else if answer form
    } else {
      //get photo array
      let photoPreviews = document.getElementById('photo-preview').children;
      let photos = [];
      for (let i = 0; i < photoPreviews.length; i++) {
        photos.push(photoPreviews[i].children[1]);
      }
      console.log('photos list', photos);
      // actual file data is stored in image in file attribute
      // NEED TO FIGURE OUT WHERE TO STORE IT

    data.body = document.getElementById('answer-text').value;
    data.name = document.getElementById('answer-nickname').value;
    data.email = document.getElementById('answer-email').value;
    data.photos = photos;
    console.log('answer form data', data);

    }
  }

  // search bar functionality

    // as you type
    searchUpdate(e) {
      const contents = e.target.value;
      if (contents.length < 3) {
        //console.log('NOT ENOUGH TEXT', contents)
        return
      } else {
        //console.log('TYPING', contents)
        this.questionSearch(contents);
      }
    }
    // hitting button
    searchEnter(e) {
      e.preventDefault();
      const contents = e.target.children[0].value;
      //console.log('HIT ENTER', contents);
      this.questionSearch(contents);
    }
    // actual search
    questionSearch(text) {
      console.log('SEARCHING');
      // get all the text and set it all to lower case for case matching
      text = text.toLowerCase();
      let questionText = this.state.questions.map(question => {
        return question['question_body'].toLowerCase();
      })
      console.log('all lower case', text, questionText);
      // iterate through the list looking for the search text
      let matching = [];
      questionText.map((question, index) => {
        if (question.search(text) !== -1) {
          matching.push(this.state.questions[index]);
        }
      })
      console.log('matching', matching);
      this.setState({questions: matching});
    }


  render() {
    let CSSStyle = CSSLight;
    if (this.state.darkmode === true) {
      CSSStyle = CSSDark;
    }
    //console.log('questions', this.state.questions);
    return (
      <div id="QandA" className={CSSStyle.QandABox}>
        <h1 className={CSSStyle.testBanner}> Questions & Answers</h1>
        <SearchBar CSSStyle={CSSStyle} search={this.searchEnter} update={this.searchUpdate} />
        <QuestionsList CSSStyle={CSSStyle} openAnswerForm={this.modalOpen} questionData={this.state.questions} />
        <SubmitQuestionForm CSSStyle={CSSStyle} formSubmit={this.submitForm} closeQuestionForm={this.modalClose}/>
        <SubmitAnswerForm CSSStyle={CSSStyle} formSubmit={this.submitForm} closeAnswerForm={this.modalClose} />
        <div id="MoreQuestions" className={CSSStyle.moreQuestions}>
          <button id="moreQuestions">More Answered Questions (WIP)</button>
          <button id="QuestionFormBtn" onClick={this.modalOpen}>Add A Question <i className="fas fa-plus"></i></button>
        </div>
      </div>
    );
  }
}

export default QuestionsAndAnswers;
