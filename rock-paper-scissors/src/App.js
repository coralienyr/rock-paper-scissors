import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Switch, Link
} from 'react-router-dom';
import * as routes from './components/Routes';
import CompVsComp from './components/CompVsComp';
import YouVsComp from './components/YouVsComp';
import NoMatch from './components/NoMatch';

const Home = () => {
  return(
    <div className="Home">
    <h1>Rock, paper, scissors</h1>
      <div id="compVsComp">
        <Link to='compVsComp'>
          Computer vs computer
        </Link>
      </div>
      <div id="youVsComp">
        <Link to='youVsComp'>
          You vs computer
        </Link>
      </div>
    </div>
  )
}


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Switch>
          <Route exact path={routes.COMPVSCOMP} component={() => <CompVsComp />} />
          <Route exact path={routes.YOUVSCOMP} component={() => <YouVsComp />} />
          <Route exact path={routes.LANDING} component={() => <Home/>} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
