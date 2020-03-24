import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { material } from "./libraries/material.js";
import { antd } from "./libraries/antd.js";
import "antd/dist/antd.css";

import { Window } from "design-system-sandbox";
import "design-system-sandbox/dist/index.css";

const materialUI = {
  route: "/material",
  scope: material,
  code: '<Button variant="contained" color="primary">Default</Button>'
};

const antDesign = {
  route: "/ant-design",
  scope: antd,
  code: ' <Button type="primary">Primary</Button>'
};

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={materialUI.route}>
            <Window code={materialUI.code} scope={materialUI.scope} />
          </Route>
          <Route path={antDesign.route}>
            <Window code={antDesign.code} scope={antDesign.scope} />
          </Route>
        </Switch>
      </Router>
    );
  }
}
