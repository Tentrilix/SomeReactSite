import React from "react";
import "./menus.scss";

function SVGTriangle() {
	return (
		<div>
			<svg height="100" width="200" id="triangle">
				<defs>
					<filter id="shadow">
						<feDropShadow dx="2" dy="4" stdDeviation="4"/>
					</filter>
				</defs>
				<a href="index.html">
					<path d="M0 0 L0 100 L200 0 Z" strokeWidth="0" fill="red"/>
					<text x="25" y="35" fontSize="20">MySite</text>
				</a>
			</svg>
		</div>
	);
}

class MenuButton extends React.Component {
	render() {
		return (
			<a className="menuBtn" href={this.props.link}>{this.props.text}</a>
		);
	}
}

class Menu extends React.Component {
	render() {
		return (
			<div>
				<SVGTriangle/>
				<div id="btnrow">
					<MenuButton link="#" text="asd"/>
					<MenuButton link="#" text="dsaD"/>
				</div>
			</div>
		);
	}
}

export default Menu;