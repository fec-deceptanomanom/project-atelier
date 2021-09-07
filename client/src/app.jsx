import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AppCSSLight from './appLight.module.css';
import AppCSSDark from './appDark.module.css';

import ProductOverview from './components/productOverview/productOverview';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productIds: ['001', '002', '003'] // temporary to test react router
    };
  }

  render() {
    return (
      <div id="App">
        <Router>
          <div>
            <ul>Links
              <li>
                <Link to='Home'>Home</Link>
                <Link to='/001'>001</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path='/'>
                <h1>Home</h1>
              </Route>
              <Route path='/001'>
                <h3>001 Page</h3>
              </Route>
            </Switch>
          </div>
        </Router>
        <h1 className={AppCSSLight.testBanner}>I'm loaded from the Light Mode style sheet!</h1>
        <h1 className={AppCSSDark.testBanner}>And I'm loaded from the Dark Mode style sheet!</h1>

      </div>
    );
  }
}

ReactDOM.render(
  <App />, document.getElementById('app'),
);
