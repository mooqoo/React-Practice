import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header'
import Footer from './components/footer'

import Body from './components/body'
import Calc from './components/calculator/calculator'
import TicTacToe from './components/tic-tac-toe/index'

const Page = {
	CALC: 'calculator',
	TIC: 'tic-tac-toe',
}

class Index extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
      page: Page.TIC
    }
  }

	render() {
		return (
			<div>
				<Header
					clickCalc={this.changePage(Page.CALC)}
					clickTicTac={this.changePage(Page.TIC)} />

				{this.state.page === Page.CALC && <Calc />}
				{this.state.page === Page.TIC && <TicTacToe />}

				{/* <Body /> */}
				{/* <Calc /> */}
				{/* <TicTacToe /> */}

				<Footer />
			</div>
		)
	}

	changePage = (page) => () => {
		this.setState({page})
		console.log('change place is called...', page)
	}
}

ReactDOM.render(<Index />, document.getElementById('App'))
