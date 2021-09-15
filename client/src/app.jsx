import React from 'react';
import ReactDOM from 'react-dom';
import AppCSSLight from './appLight.module.css';
import AppCSSDark from './appDark.module.css';
import ProductOverview from './components/productOverview/ProductOverview';
import RelatedItems from './components/relatedItems/RelatedItems';
import RatingsAndReviews from './components/ratingsAndReviews/RatingsAndReviews';
import QuestionsAndAnswers from './components/questionsAndAnswers/QuestionsAndAnswers';
const $ = require('jquery');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: {},
      styleInfo: {},
      reviewInfo: {},
      darkmode: false,
      validProduct: true,
      displayError: {
        status: '',
        message: ''
      }
    };
    this.darkmodeToggle = this.darkmodeToggle.bind(this);
  }

  darkmodeToggle() {
    const toggleState = !this.state.darkmode;
    this.setState({ darkmode: toggleState });
  }

  componentDidMount() {
    const defaultId = '47421'; // Saved for debugging
    const urlId = window.location.href.split('/p/')[1].replace('/', '');
    $.get(`http://localhost:3000/productInfo/${urlId}`, (data, status) => {
      this.setState({
        // Keep current state info...
        ...this.state,
        // ...then unpack the api info
        ...data,
        validProduct: true
      });
      console.log(data);
    })
    .fail((error) => {
      // console.log(error);
      this.setState({
        ...this.state,
        validProduct: false,
        displayError: {
          status: error.status,
          message: error.statusText
        }
      });
    });
  }

  render() {
    let CSSStyle = AppCSSLight;
    let bannerText = 'I\'m loaded in Light Mode!';
    if (this.state.darkmode === true) {
      CSSStyle = AppCSSDark;
      bannerText = 'And now I\'m loaded in Dark Mode!';
    }
    if (this.state.validProduct) {
      return (
        <div id="App">
          <label className={CSSStyle.switch}>
            <input onChange={this.darkmodeToggle} type="checkbox"></input>
            <span className={CSSStyle.slider}></span>
          </label>
          <h1 className={CSSStyle.testBanner}>{bannerText}</h1>
          <ProductOverview data={{product: this.state.productInfo, styles: this.state.styleInfo, reviews: this.state.reviewInfo}}/>
          <RelatedItems />
          <QuestionsAndAnswers darkmode={this.state.darkmode} />
          <RatingsAndReviews />
        </div>
      );
    } else {
      return (
        <div>
          <h1>{this.state.displayError.status}</h1>
          <h3>{this.state.displayError.message}</h3>
        </div>
      );
    }
  }
}

ReactDOM.render(
  <App />, document.getElementById('app'),
);
