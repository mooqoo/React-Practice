import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'

class Index extends React.Component {
	render() {
		return (
			<div>
				<Header />

				<div>Whats up girl?!</div>
			</div>
		)
	}
}

ReactDOM.render(<Index />, document.getElementById('App'))
