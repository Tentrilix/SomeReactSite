import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./menus.css";
import App from "./App";
import Menu from "./menuBar";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Menu/>, document.getElementById("menubar"));
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister(); //.register() ha offline is kéne használni