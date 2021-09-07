import React from 'react';
import CSSLight from './QandALight.module.css';
import CSSDark from './QandADark.module.css';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="QandA">
        <h1 className={CSSLight.testBanner}>Testing from Questions and Answers</h1>
      </div>
    );
  }
}

export default QuestionsAndAnswers;
