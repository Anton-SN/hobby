import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className = "header">
        <h1>Ссылки</h1>
          <ul className = "header__links links">
            <li>
              <Link to="/hacks">Фичи</Link>
            </li>
            <li>
              <Link to="/test">Тестовые задания</Link>
            </li>
            <li>
              <Link to="/about">Обо мне</Link>
            </li>
            <li>
              <Link to="/app">Приложения</Link>
            </li>
          </ul>
      </div>
    )
  }
}
