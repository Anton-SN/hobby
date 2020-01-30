import React, { Component } from "react";

import Router from "./router";
import Header from "./page/Header/HeaderBlock";
import Footer from "./page/Footer/FooterBlock";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router />
        <Footer />
      </div>
    );
  }
}
