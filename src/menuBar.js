import React from "react";
import "./menus.css";

function svgTriangle() {
	return (
		<div>
			<svg height="100" width="200" id="triangle">
				<defs>
					<filter id="shadow">
						<feDropShadow dx="2" dy="4" stdDeviation="4"/>
					</filter>
				</defs>
				<a href=".././public/index.html">
					<path d="M0 0 L0 100 L200 0 Z" strokeWidth="0" fill="red"/>
				</a>
				<text x="25" y="35" fontSize="20">MySite</text>
			</svg>
		</div>
	);
}

class Menu extends React.Component {
	render() {
		return (
			svgTriangle()
		);
	}
}

export default Menu;