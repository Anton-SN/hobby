import React, { Component } from "react";

import Router from "./page/MainBlocks/Router";
import Header from "./page/Header/HeaderBlock";
import Footer from "./page/Footer/FooterBlock";

import styles from './App.module.css'

export default class App extends Component {
  render() {
    return (
      <div className={styles.Content}>
        <Header />
        <Router />
        <Footer />
      </div>
    );
  }
}
