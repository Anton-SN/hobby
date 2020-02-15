import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderBlock.module.css";

export default class Header extends Component {
  render() {
    const linksDate = [ 
      { path: "/hacks", label: "Фичи", id:"1", }, 
      { path: "/test", label: "Тестовые задания", id:"2", }, 
      { path: "/about", label: "Обо мне", id:"3", }, 
      { path: "/apps", label: "Приложения", id:"4", }, ];
      const linkElem = linksDate.map(link => 
        <li key={link.id} className = {`${styles.header__link} ${styles.link}`}>
          <Link to={link.path}>{link.label}</Link>
        </li>)
    return (
      <div className = {styles.header}>
        <h1>Ссылки Хеадер</h1>
          <ul className = {`${styles.header__list} ${styles.list}`}>
            {linkElem || "Пусто"}
          </ul>
      </div>
    )
  }
}
