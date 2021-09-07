import React from 'react';
import ReactDOM from 'react-dom';
import AppCSSLight from './appLight.module.css';
import AppCSSDark from './appDark.module.css';

function App() {
  return (
    <div id="App">
      <h1 className={AppCSSLight.testBanner}>I'm loaded from the Light Mode style sheet!</h1>
      <h1 className={AppCSSDark.testBanner}>And I'm loaded from the Dark Mode style sheet!</h1>

    </div>
  );
}

ReactDOM.render(
  <App />, document.getElementById('app'),
);
