import React from "react";
import { HashRouter, Switch, NavLink, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import Main from "./Main";
import NotFound from "./NotFound";


const active = {
  color: "red",
  fontWeight: "bold"
};

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeStyle={active}>
              All
            </NavLink>
          </li>
          <li>
            <NavLink to="/done" activeStyle={active}>
              Done
            </NavLink>
          </li>
          <li>
            <NavLink to="/not-done" activeStyle={active}>
              Not-Done
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/:filter?" component={Main} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default App;
