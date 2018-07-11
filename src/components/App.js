import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Search from './Search';

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
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
