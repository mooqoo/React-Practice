import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header'
import Body from './components/body'
import Calc from './components/calculator/calculator'
import Footer from './components/footer'

class Index extends React.Component {
	render() {
		return (
			<div>
				<Header />
				{/* <Body /> */}
				<Calc />
				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<Index />, document.getElementById('App'))
