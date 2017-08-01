import React from 'react'

import '../css/header.css'

// props: {
// 	num
// }
class Header extends React.Component {

	render() {
		return (
			<div>
				<div className="header"> ==== HEADER ==== </div>
				{
					// Array(3).fill().map((_, i) => i)
					// .map(num =>
					// 	<button
					// 		key={num}
					// 		onClick={this.buttonClick(num)}>
					// 		{num}
					// 	</button>
					// )
				}
				{/* <button onClick={this.buttonClick}>{this.props.num}</button> */}
			</div>
		)
	}
}

export default Header
