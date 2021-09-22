import React from 'react';
import PhotoThumbnail from './PhotoThumbnail';


// const previewDiv = document.querySelector('#photo-preview');
// const files = document.querySelector('input[type=file').files;

// const readAndPreview = function(file) {

// if (files) {
//   [].forEach.call(files, readAndPreview);
// }



class SubmitAnswerForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentThumbnails: [],
      maxFiles: false,
    };
    this.inputFile = this.inputFile.bind(this);
  }

  inputFile = (e) => {
    const fileInput = e.target;
    const previews = document.getElementById('photo-preview');
    let thumbnails = this.state.currentThumbnails;
    console.log('currentThumbnails', this.state.currentThumbnails);

    if (fileInput.files.length > 5 || fileInput.files.length + thumbnails.length > 5) {
      alert('Sorry, only 5 files are allowed to be uploaded.')
      return;
    } else {
      for (let i = 0; i < fileInput.files.length; i++) {
        let file = fileInput.files[i];
        let url = URL.createObjectURL(file);
        console.log('file, url', file, url);
        let image = {
          title: file.name,
          url,
        };
        thumbnails.push(image);
      }
    }
    this.setState({currentThumbnails: thumbnails})

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

  render() {
    const CSSStyle = this.props.CSSStyle;

    return (
      <div id="AnswerForm" className={CSSStyle.modal}>
        <div className={CSSStyle.modalContent}>
        <span id="closeAnswerForm" className={CSSStyle.close} onClick={this.props.closeAnswerForm}><i className="far fa-times-circle"></i></span>
        <h2>This is where answers are submitted</h2>
        <p className={CSSStyle.smallText}>Fields marked with * are required</p>
        <form id="answer-form" onSubmit={this.props.formSubmit}>
          <label htmlFor="answer-email">*Email Address:</label><br></br>
          <input id="answer-email" type="email" required="required"></input><br></br>
          <label htmlFor="answer-nickname">*Nickname (does not have to be your real name):></label><br></br>
          <input id="answer-nickname" type="textarea" required="required"></input><br></br>
          <label htmlFor="answer-text">*Your Answer:</label><br></br>
          <textarea id="answer-text" required="required" rows="10"></textarea><br></br>
          <label htmlFor="photo-upload">Upload a Photo:</label><br></br>
          <input id="photo-upload" type="file" multiple style={{display: "none"}} onChange={this.inputFile}></input>
          <button id="photo-add-new" type="button" onClick={this.addFile}><i className="fas fa-plus"></i> Add a File</button>
          <br></br>
          <div id="photo-preview">
            {(this.state.currentThumbnails || []).map((thumbnail, index) => {
              return (<PhotoThumbnail CSSStyle={this.props.CSSStyle} key={index} data={thumbnail} />)
              })
            }
          </div>
          <br></br>
          <input type="submit"></input>
        </form>
        </div>
      </div>
    );
  }
};

export default SubmitAnswerForm;
