import React from "react";
import { Route, Switch, useRouteMatch, Link} from 'react-router-dom'

import "./Hacks.css";
import Card from "./Card/Card";

export default function Home() {
  const { path }= useRouteMatch();
    return (
      <div className="content">
        <h2>Фичи</h2>
        <ul>
          <li>
            <Link to="/hacks/card">Банковская карта</Link>
          </li>
        </ul>
        <p>Туту будет горизонтальное меню начальниха</p>
        <Switch>
          <Route path={`${path}/card`} component={Card}></Route>
        </Switch>
      </div>
    );
}
