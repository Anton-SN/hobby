import React, { Component } from "react";
import logo from "../../../images/logo.svg";
import "./NotFound.css";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="https://reactjs.org">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <a className="App-link" href="https://reactjs.org">
            Not Found
          </a>
        </header>
      </div>
    );
  }
}
