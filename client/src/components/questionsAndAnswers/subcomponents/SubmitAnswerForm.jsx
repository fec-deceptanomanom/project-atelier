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
              return (<PhotoThumbnail CSSStyle={this.props.CSSStyle} key={index} data={thumbnail} remove={this.removeFile} />)
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
