import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Welcome(property) { return (
	<p>Hello {property.name}</p>
);}

class App extends React.Component {
	render() {
		return (
			<div>
				<img src={logo} width={128} alt="pic"/>
				<Welcome name="asd"/>
				<Welcome name="dsa"/>
				<Welcome name="fas"/>
			</div>
		);
	}
}

export default App;