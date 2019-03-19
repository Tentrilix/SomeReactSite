import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./menus.scss";
import Menu from "./menuBar";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Menu/>, document.getElementById("menubar"));

serviceWorker.unregister(); //.register() ha offline is kéne használni