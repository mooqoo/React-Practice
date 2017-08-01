import React from 'react'

const styleSheet = {
  rootWrapper: {
    display: 'flex',
    flex: 1,
    height: 500,
    background: 'blue',
  }
}



class TicTacToe extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      // display: "0",
      // haveDecimal: false,
    }
  }

  // --- render ---
	render() {
		return (
      <div style={styleSheet.rootWrapper}>
  			{/* <div style={styleSheet.container}>
          {this.renderDisplay()}
          {this.renderTopRow()}
          {this.renderButtons()}
  			</div> */}
      </div>
		)
	}
}

export default TicTacToe
