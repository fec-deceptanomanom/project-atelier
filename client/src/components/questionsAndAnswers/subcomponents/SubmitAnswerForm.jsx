import React from 'react';
import PhotoThumbnail from './PhotoThumbnail';


class SubmitAnswerForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentThumbnails: [],
      currentFiles : [],
      maxFiles: false,
    };
    this.inputFile = this.inputFile.bind(this);
    this.removeFile = this.removeFile.bind(this);
  }

  inputFile = (e) => {
    const fileInput = e.target;
    const previews = document.getElementById('photo-preview');
    let thumbnails = this.state.currentThumbnails;
    let currentFiles = this.state.currentFiles;
   // console.log('currentThumbnails', this.state.currentThumbnails);

    if (fileInput.files.length > 5 || fileInput.files.length + thumbnails.length > 5) {
      alert('Sorry, only 5 files are allowed to be uploaded.')
      return;
    } else {
      for (let i = 0; i < fileInput.files.length; i++) {
        let file = fileInput.files[i];
        currentFiles.push(file);
        let image = {
          title: file.name,
        };
        //console.log('unaltered file', image.file);
        image.url = URL.createObjectURL(file);
        //console.log('file, url', file, url);
        thumbnails.push(image);
      }
    }
    this.setState({currentThumbnails: thumbnails, currentFiles})
    this.props.getPhotos(currentFiles);

    if (thumbnails.length >= 5) {
      this.setState({maxFiles: true});
      let button = document.getElementById('photo-add-new');
      button.style.display = 'none';
    }
  }

  addFile = (e) => {
    const fileInput = document.getElementById('photo-upload');
    fileInput.click();
  }

  removeFile = (e) => {
    const imageName = e.target.parentElement.parentElement.children[1].attributes.title.value;
    //console.log(imageName)
    let thumbnails = this.state.currentThumbnails;
    let currentFiles = this.state.currentFiles;
    //console.log('before', thumbnails);
    for (let i = 0; i < thumbnails.length; i++) {
      if (thumbnails[i].title === imageName) {
        thumbnails.splice(i, 1);
        currentFiles.splice(i, 1);
      }
    }
    //console.log('after', thumbnails);
    this.setState({currentThumbnails: thumbnails, currentFiles});
    this.props.getPhotos(currentFiles);
  }

  render() {
    const CSSStyle = this.props.CSSStyle;
    let currentQuestion;
    if (this.props.questionID !== null) {
      currentQuestion = document.getElementById('question-' + this.props.questionID).innerHTML.slice(2);
    }

    return (
      <div id="submit-new-answer-form" className={[CSSStyle.modal, CSSStyle['answer-form']].join(' ')} onClick={this.props.onClick}>
        <div id="answer-form-modal" className={CSSStyle['modal-content']}>
        <span id="close-answer-form-span" className={CSSStyle.close} aria-label="Close" onClick={this.props.closeAnswerForm}><i id="close-answer-form" className="far fa-times-circle"></i></span>
        <h2 id="answer-submission-title">Submit Your Answer</h2>
        <h3 id="answer-submission-subtitle">{this.props.productName} : {currentQuestion}</h3>
        <p id="answer-submission-instructions">Fields marked with * are required</p>
        <form id="answer-form" onSubmit={this.props.formSubmit}>
          <label id="answer-email-label" htmlFor="answer-email">* Your Email:</label><br></br>
          <input id="answer-email" className={CSSStyle['modal-input']} type="email" required="required" maxLength="60" placeholder="Example: jack@email.com"></input><br></br>
          <p id="answer-email-instructions">For authentication reasons; you will not be emailed.</p><br></br>
          <label id="answer-nickname-label" htmlFor="answer-nickname">* Your Nickname:</label><br></br>
          <input id="answer-nickname" className={CSSStyle['modal-input']} type="textarea" required="required" maxLength="60" placeholder="Example: jackson11!"></input><br></br>
          <p id="answer-nickname-instructions">For privacy reasons, do not use your full name or email address.</p><br></br>
          <label id="answer-text-label" htmlFor="answer-text">* Your Answer:</label><br></br>
          <textarea id="answer-text" className={CSSStyle['modal-textarea']} required="required" rows="10" maxLength="1000"></textarea><br></br>
          <label id="photo-upload-label" htmlFor="photo-upload">Upload Your Photos:</label><br></br>
          <input id="photo-upload" type="file" multiple style={{display: "none"}} onChange={this.inputFile}></input>
          <button id="photo-add-new" type="button" onClick={this.addFile}><i id="photo-add-new-icon" className="fas fa-plus"></i> Add a Photo</button>
          <br></br>
          <div id="photo-preview">
            {(this.state.currentThumbnails || []).map((thumbnail, index) => {
              return (<PhotoThumbnail CSSStyle={this.props.CSSStyle} key={index} data={thumbnail} remove={this.removeFile} />)
              })
            }
          </div>
          <br></br>
          <input id="answer-form-submit" className={CSSStyle['submit-button']} type="submit" aria-label="Submit"></input>
        </form>
        </div>
      </div>
    );
  }
};

export default SubmitAnswerForm;
