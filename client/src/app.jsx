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
    };
    this.darkmodeToggle = this.darkmodeToggle.bind(this);
  }

  darkmodeToggle() {
    const toggleState = !this.state.darkmode;
    this.setState({ darkmode: toggleState });
  }

  componentDidMount() {
    $.get('http://localhost:3000/productInfo/47421', (data, status) => {
      this.setState({
        // Keep current state info...
        ...this.state,
        // ...then unpack the api info
        ...data
      });
      console.log(data);
    })
  }

  render() {
    let CSSStyle = AppCSSLight;
    let bannerText = 'I\'m loaded in Light Mode!';
    if (this.state.darkmode === true) {
      CSSStyle = AppCSSDark;
      bannerText = 'And now I\'m loaded in Dark Mode!';
    }
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
  }
}

ReactDOM.render(
  <App />, document.getElementById('app'),
);
