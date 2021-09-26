import React from 'react';
import CSSLight from './styles/QandALight.module.css';
import CSSDark from './styles/QandADark.module.css';
import QuestionsList from './subcomponents/QuestionsList';
import SearchBar from './subcomponents/SearchBar';
import SubmitQuestionForm from './subcomponents/SubmitQuestionForm';
import SubmitAnswerForm from './subcomponents/SubmitAnswerForm';
const $ = require('jquery');

import { withClickTracker } from '../../../lib/interactions.jsx';


class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkmode: false,
      formTarget: null,
      productID: null,
      allQuestions: [],
      displayedQuestions: [],
      displayError: null,
      photoFiles: [],
    };
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.questionSearch = this.questionSearch.bind(this);
    this.searchUpdate = this.searchUpdate.bind(this);
    this.searchEnter = this.searchEnter.bind(this);
    this.showAnotherQuestion = this.showAnotherQuestion.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {
    // GET request for questions
    this.getQuestions();
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

  getQuestions() {
    const urlId = window.location.href.split('/p/')[1].replace('/', '');
    $.get(`http://localhost:3000/questions/${urlId}`, (data, status) => {
      console.log('get request question data', data);
      const questionsList = this.sortQuestions(data.results);
      let questions= [];
      if (questionsList.length >= 2) {
        questions = [questionsList[0], questionsList[1]];
      } else if (questionsList.length === 1) {
        questions = [questionsList[0]];
      }
      this.setState({
        allQuestions: questionsList,
        productID: data['product_id'],
        displayError: null,
        displayedQuestions: questions,
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
  }

  sortQuestions(questions) {
    questions.sort(function(a, b) {
      return b["question_helpfulness"] - a["question_helpfulness"];
    });
    return questions;
  };

  showAnotherQuestion(e) {
    let currentQuestions = this.state.displayedQuestions;
    //console.log('CURRENT', currentQuestions);
    const targetIndex = currentQuestions.length;
    const newQuestion = this.state.allQuestions[targetIndex];
   // console.log('NEW', newQuestion);
    currentQuestions.push(newQuestion);
    this.setState({displayedQuestions: currentQuestions});
    if (currentQuestions.length === this.state.allQuestions.length) {
      let button = document.getElementById('show-more-questions');
      button.style.display = 'none';
    }
  }

  modalOpen(e) {
    const target = e.target.attributes.id.value;
    let modal;
    if (target === 'answer-form-btn') {
      modal = document.getElementById('submit-new-answer-form');
      const targetName = e.target.parentElement.parentElement.children[0].attributes.id.value.slice(9);
      //console.log('CLICKED', targetName);
      this.setState({formTarget: targetName})
    } else if (target === 'question-form-btn') {
      modal = document.getElementById('submit-new-question-form');
      const targetName = this.state.productID;
      this.setState({formTarget: targetName})
    }
    modal.style.display = "block";
  }

  modalClose(e) {
    const target = e.target.parentElement.attributes.id.value;
    //console.log('CLICKED', target);
    let modal;
    if (target === 'close-answer-form-span') {
      modal = document.getElementById('submit-new-answer-form');
    } else if (target === 'close-question-form-span') {
      modal = document.getElementById('submit-new-question-form');
    }
    modal.style.display = "none";
    this.setState({formTarget: null})
  }

  getPhotos(filesList) {
    this.setState({photoFiles: filesList});
  }

  // incomplete POST function
  submitForm(e) {
    e.preventDefault();
    //console.log('form target', this.state.formTarget);
    let formData = new FormData();
    // if question form
    if (this.state.formTarget === this.state.productID) {
      formData.append('body', document.getElementById('question-text').value);
      formData.append('name', document.getElementById('question-nickname').value);
      formData.append('email', document.getElementById('question-email').value);
      formData.append('productID', this.state.formTarget);
      console.log('question form data', formData);
      this.postForm('question', formData);
    // else if answer form
    } else {
      formData.append('body', document.getElementById('answer-text').value);
      formData.append('name', document.getElementById('answer-nickname').value);
      formData.append('email', document.getElementById('answer-email').value);
      formData.append('question', this.state.formTarget);
      //console.log('STATE', this.state.photoFiles);
      let photos = this.state.photoFiles;
      for (let i = 0; i < photos.length; i++) {
        let photoFile = photos[i];
        //console.log(photoFile);
        formData.append('files', photoFile);
      }
      //console.log('answer form data', formData);
      this.postForm('answer', formData);
    }
  }

  postForm(formType, formData) {
    let destination;
    if (formType === 'question') {
      destination = 'questions';
    } else if (formType === 'answer') {
      destination = 'answers';
    }
    $.ajax({
      url: `http://localhost:3000/${destination}`,
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: (data) => {
        console.log('post question/answer form', data);
        this.getQuestions();
      },
      error: (error) => {
        this.setState({
          displayError: {
            status: error.status,
            message: error.statusText
          }
        });
      }
    })
  }

  // search bar functionality

    // as you type
    searchUpdate(e) {
      const contents = e.target.value;
      if (contents.length < 3) {
        //console.log('NOT ENOUGH TEXT', contents)
        this.setState({displayedQuestions: [this.state.allQuestions[0], this.state.allQuestions[1]]});
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
      //console.log('SEARCHING');
      // get all the text and set it all to lower case for case matching
      text = text.toLowerCase();
      let questionText = this.state.allQuestions.map(question => {
        return question['question_body'].toLowerCase();
      })
      //console.log('all lower case', text, questionText);
      // iterate through the list looking for the search text
      let matching = [];
      questionText.map((question, index) => {
        //console.log('question', question);
        if (question.search(text) !== -1) {
          matching.push(this.state.allQuestions[index]);
          //console.log('matches', matching)
        }
      })
      //console.log('displayed', this.state.displayedQuestions);
      this.setState({displayedQuestions: matching});
    }


  render() {
    let CSSStyle = CSSLight;
    if (this.state.darkmode === true) {
      CSSStyle = CSSDark;
    }
    const component = 'Questions and Answers';
    //console.log('questions', this.state.questions);
    return (
      <div id="QandA-main-component" className={CSSStyle.QandABox} onClick={(e) => {
        this.props.clickTracker(e.target.attributes.id.value, component)
        }}>
        <h1 id="QandA-main-title" className={CSSStyle.testBanner}> Questions & Answers</h1>
        <SearchBar CSSStyle={CSSStyle} search={this.searchEnter} update={this.searchUpdate} />
        <QuestionsList CSSStyle={CSSStyle} openAnswerForm={this.modalOpen} questionData={this.state.displayedQuestions} />
        <SubmitQuestionForm CSSStyle={CSSStyle} formSubmit={this.submitForm} closeQuestionForm={this.modalClose} />
        <SubmitAnswerForm CSSStyle={CSSStyle} formSubmit={this.submitForm} closeAnswerForm={this.modalClose} getPhotos={this.getPhotos} />
        <div id="more-questions" className={CSSStyle.moreQuestions}>
          <button id="show-more-questions" onClick={this.showAnotherQuestion}>Show More Questions</button>
          <button id="question-form-btn" onClick={this.modalOpen}>Add A Question <i id="question-form-btn-icon" className="fas fa-plus"></i></button>
        </div>
      </div>
    );
  }
}

export default withClickTracker(QuestionsAndAnswers);
