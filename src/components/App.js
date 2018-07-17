import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Search from './Search';
import Forecast from './Forecast';
import Details from './Details';

class App extends React.Component {
  render() {
    return (
      <Router >
        <div className='container'>
          <div className='nav'>
            <Search />
          </div>
          <div className='home-container'>
            <Switch>
              <Route exact path='/' component={Search} />
              <Route  path='/forecast' component={Forecast} />
              <Route  path='/details/:city' component={Details} />
              <Route render={() => <p> Not Found </p>} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
