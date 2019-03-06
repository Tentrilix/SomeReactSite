import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Time from "./Time";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById('root'));

function Draw() {
	return (
		ReactDOM.render(<Time/>, document.getElementById("time"))
	);
}

setInterval(Draw, 1000);

serviceWorker.unregister(); //.register() ha offline is kéne használni