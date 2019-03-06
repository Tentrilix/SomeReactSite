import React from "react";

function Time() {
	return (
		<div>
			<p>{new Date().toLocaleTimeString()}</p>
		</div>
	);
}

export default Time;