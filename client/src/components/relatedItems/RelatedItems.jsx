import React from 'react';
import CSSLight from './relatedItemsLight.module.css';
import CSSDark from './relatedItemsDark.module.css';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="RelatedItems">
        <h1 className={CSSLight.testBanner}>Testing from Related Items</h1>
      </div>
    );
  }
}

export default QuestionsAndAnswers;
