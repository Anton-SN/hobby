import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import styles from "./index.module.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render((
    <BrowserRouter basename={"/home"}>
        <div className={styles.Page}>
            <App/>
        </div>
    </BrowserRouter>    
), document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();