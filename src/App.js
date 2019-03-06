import React from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome(property) { return (
	<p>Hello {property.name}</p>
);}

function App() {
	const hello = (
		<div>
			<img src={logo} width={128}/>
			<Welcome name="asd" />
			<Welcome name="dsa" />
			<Welcome name="fas" />
		</div>
	);
	const time = (
		<div>
			<h1>{new Date().toLocaleTimeString()}</h1>
		</div>
	);

	return hello;
}

export default App;