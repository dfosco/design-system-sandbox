import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { material } from "./libraries/material.js";
import { antd } from "./libraries/antd.js";
import "antd/dist/antd.css";

import { Editor } from "design-system-sandbox";
import "design-system-sandbox/dist/index.css";

const materialUI = {
  name: "Material UI",
  route: "/material",
  scope: material,
  code: '<Button variant="contained" color="primary">Default</Button>'
};

const antDesign = {
  name: "Ant Design",
  route: "/ant-design",
  scope: antd,
  code: ' <Button type="primary">Primary</Button>'
};

function Header(props) {
  return (
    <aside id="tw">
      <nav className="bg-purple-900 text-white min-h-full p-4 flex justify-between items-center">
        <h1 className="m-0 text-current font-bold text-xl">Design System Sandbox • <span className="text-lg">{props.name}</span></h1>
        <a className="text-current" href="http://github.com/dfosco/design-system-sandbox" target="_blank" rel="noopener noreferrer">
          <svg className="h-8 w-8 fill-current" title="See on Github" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
        </a>
      </nav>
    </aside>)
}

function Main(props) {
  return (
    <main>
      <Editor code={props.code} scope={props.scope} />
    </main>
  )
}

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path={materialUI.route}>
              <Header name={materialUI.name} />
              <Editor tag="main" code={materialUI.code} scope={materialUI.scope} />
            </Route>
            <Route path={antDesign.route}>
              <Header name={antDesign.name} />
              <Editor tag="footer" code={antDesign.code} scope={antDesign.scope} />
            </Route>
            <Route path="*/">
              <Header name={materialUI.name} />
              <Editor tag="p" code={materialUI.code} scope={materialUI.scope} />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
