import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import About from './About/About';
import Test from './TestBlock/Test';
import Apps from './Apps/Apps';
import Hacks from './Hacks/Hacks';

import styles from './Router.module.css'

export default class Router extends Component {
  render() {
    return (
      <div className={styles.Main}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/hacks" component={Hacks} />
          <Route path="/test" component={Test} />
          <Route path="/apps" component={Apps} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}