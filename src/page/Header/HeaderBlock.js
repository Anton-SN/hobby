import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MoodIcon from '@material-ui/icons/Mood';
import Typography from '@material-ui/core/Typography';

import styles from "./HeaderBlock.module.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
  }

  handleChange = (newValue) => {
    this.setState({ value: newValue })
  }
  render() {

  const allyProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,}
  }

  const linksDate = [ 
    { path: "/hacks", label: "Фичи", id:"0", }, 
    { path: "/test", label: "Тестовые задания", id:"1", }, 
    { path: "/about", label: "Обо мне", id:"2", }, 
    { path: "/apps", label: "Приложения", id:"3", }, ];
      
    const tabsElem = linksDate.map(link => 
    <Tab 
        key={link.id} 
        className = {`${styles.header__link} ${styles.link}`} 
        label={link.label}
        {...allyProps(link.id)}
        component={Link} 
        to={link.path}
    />)

    return (
      <div className = {styles.header}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h3" className={styles.title}>
              Добро пожаловать <MoodIcon fontSize="large"/>
            </Typography>
          </Toolbar>
          <Tabs 
            variant="fullWidth" 
            value={this.state.value} 
            onChange={this.handleChange} 
            aria-label="simple tabs example">
            {tabsElem}
          </Tabs>
        </AppBar>
      </div>
    )
  }
}
