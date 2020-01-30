import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './page/MainBlocks/Home/Home';
import NotFound from './page/MainBlocks/NotFound/NotFound';
import About from './page/MainBlocks/About/About';
import Test from './page/MainBlocks/TestBlock/Test';
import Apps from './page/MainBlocks/Apps/Apps';
import Hacks from './page/MainBlocks/Hacks/Hacks';

export default class Router extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/hacks" component={Hacks} />
          <Route path="/test" component={Test} />
          <Route path="/apps" component={Apps} />
          <Route path="*" component={NotFound} />
        </Switch>
    );
  }
}