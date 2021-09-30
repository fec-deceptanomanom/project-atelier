import React from 'react';
import ReactDOM from 'react-dom';
import AppCSSLight from './appLight.module.css';
import AppCSSDark from './appDark.module.css';
import ProductOverview from './components/productOverview/ProductOverview';
import RelatedItems from './components/relatedItems/RelatedItems';
import RatingsAndReviews from './components/ratingsAndReviews/RatingsAndReviews';
import QuestionsAndAnswers from './components/questionsAndAnswers/QuestionsAndAnswers';

import { withClickTracker } from '../lib/interactions.jsx';

import { URL_BASE } from '../../.secretURL.json';
const $ = require('jquery');

import { postInteraction } from '../lib/interactions.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: {},
      styleInfo: {},
      reviewInfo: {},
      relatedIDs: [],
      questionsList: [],
      reviews: {},
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
    const urlId = window.location.href.split('/p/')[1].replace('/', '');
    $.get(`${URL_BASE}/productInfo/${urlId}`, (data, status) => {
      // console.log('get request data', data);
      this.setState({
        // Keep current state info...
        ...this.state,
        // ...then unpack the api info
        ...data,
        validProduct: true
      });
    })
    .fail((error) => {
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
    if (this.state.validProduct && this.state.productInfo.id) {
      return (
        <div id="App">
          <div id="top-page" onClick={(e) => {
              postInteraction(e.target.attributes.id.value, 'Main App');
            }}>
          <label id="nightmode-toggle-container" className={CSSStyle.switch}>
            <label id="nightmode-label" htmlFor="nightmode">Nightmode:</label>
            <input id="nightmode-toggle" name="nightmode" onChange={this.darkmodeToggle} type="checkbox"></input>
            <span id="nightmode-toggle-slider" className={CSSStyle.slider}></span>
          </label>
          <h1 id="top-banner" className={CSSStyle.testBanner}>{bannerText}</h1>
          </div>
          <ProductOverview data={{product: this.state.productInfo, styles: this.state.styleInfo, reviews: this.state.reviewInfo}}/>
          <RelatedItems pageItem={{
                          product: this.state.productInfo,
                          styles: this.state.styleInfo,
                          reviews: this.state.reviewInfo
                        }}
                        ids={this.state.relatedIDs}/>
          <QuestionsAndAnswers darkmode={this.state.darkmode} questionsList={this.state.questionsList} productName={this.state.productInfo.name} />
          <RatingsAndReviews reviewList={this.state.reviews} reviewsInfo={this.state.reviewInfo} />
        </div>
      );
    } else if (this.state.validProduct) {
      return (<p>Loading...</p>)
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

let TrackingApp = withClickTracker(App)

ReactDOM.render(
  <TrackingApp />, document.getElementById('app'),
);


