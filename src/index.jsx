import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'

class Index extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Body />
				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<Index />, document.getElementById('App'))
