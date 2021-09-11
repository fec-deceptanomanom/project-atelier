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
      styleInfo: {}
    };
  }

  componentDidMount() {
    $.get('http://localhost:3000/productInfo/47421', (data, status) => {
      this.setState({
        ...this.state,
        productInfo: data.productInfo,
        styleInfo: data.styleInfo
      });
      console.log(data);
    })
  }

  render() {
    return (
      <div id="App">
        <h1 className={AppCSSLight.testBanner}>I'm loaded from the Light Mode style sheet!</h1>
        <h1 className={AppCSSDark.testBanner}>And I'm loaded from the Dark Mode style sheet!</h1>
        <ProductOverview data={this.state}/>
        <RelatedItems />
        <QuestionsAndAnswers />
        <RatingsAndReviews />

      </div>
    );
  }
}

ReactDOM.render(
  <App />, document.getElementById('app'),
);
