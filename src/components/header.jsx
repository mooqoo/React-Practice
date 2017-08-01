import React from 'react'

import '../css/header.css'

class Header extends React.Component {

	render() {
		return (
			<div>
				<div className="header"> ==== HEADER ==== </div>


				<div className="btn_container">
					<button
						className="headerBtn"
						onClick={this.props.clickCalc}>
						calculator
					</button>

					<button
						className="headerBtn"
						onClick={this.props.clickTicTac}>
						tic tac toe
					</button>
				</div>

			</div>
		)
	}
}

export default Header
