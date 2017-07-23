import React from 'react'

import './css/header.css'

class Header extends React.Component {

	buttonClick() {
		console.log("Clicked");
	}

	render() {
		return (
			<div>
				<div className="albert"> ==== This is my awesome header ==== </div>
				<button onClick={this.buttonClick}>YO</button>
			</div>
		)
	}
}

export default Header
