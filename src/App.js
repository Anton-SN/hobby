import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';

import Router from "./router";
import Header from "./page/Header/HeaderBlock";
import Footer from "./page/Footer/FooterBlock";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    );
  }
}
