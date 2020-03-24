import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Window from "./Window.js";
import { material } from "./libraries/material.js";
import { antd } from "./libraries/antd.js";
import "tachyons/css/tachyons.min.css";
import "antd/dist/antd.css";

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

function AppNew() {
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

export default AppNew;
