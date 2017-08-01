import React from 'react'

// import '../css/footer.css'

// props(num)
class NumBtn extends React.Component {
	// --- method ---
	buttonClick = num => () => {
		this.props.update(num)
		console.log(`Clicked ${num}`)
	}

	render = () => {
		const num = this.props.num
		return (
			<button style={this.props.style} onClick={this.buttonClick(num)}>
				<div style={{flex: 1}}>{num}</div>
			</button>
		)
	}
}

export default NumBtn
