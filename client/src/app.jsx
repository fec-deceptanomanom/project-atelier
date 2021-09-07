import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AppCSSLight from './appLight.module.css';
import AppCSSDark from './appDark.module.css';
import ProductOverview from './components/productOverview/ProductOverview';
import RelatedItems from './components/relatedItems/RelatedItems';
import RatingsAndReviews from './components/ratingsAndReviews/RatingsAndReviews';
import QuestionsAndAnswers from './components/questionsAndAnswers/QuestionsAndAnswers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="App">
        <h1 className={AppCSSLight.testBanner}>I'm loaded from the Light Mode style sheet!</h1>
        <h1 className={AppCSSDark.testBanner}>And I'm loaded from the Dark Mode style sheet!</h1>
        <ProductOverview />
        <RelatedItems />
        <RatingsAndReviews />
        <QuestionsAndAnswers />

      </div>
    );
  }
}

ReactDOM.render(
  <App />, document.getElementById('app'),
);
