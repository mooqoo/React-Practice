import React from 'react'

const styleSheet = {
  rootWrapper: {
    display: 'flex',
    flex: 1,
    background: 'blue',
    marginTop: 50,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  boardContainer: {
    display: 'flex',
    flexDirection: 'column',
    background: 'gray',
    width: 450,
    height: 450,
  },

  boardRow: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    // margin: 1,
    background: 'green',
  },

  sideborder: {
    borderLeftWidth: 2,
    borderLeftColor: 'yellow',
    borderRightWidth: 2,
    borderRightColor: 'yellow',
  },

  upDownborder: {
    borderStyle: 'solid',
    borderWidth: '2px 0px 2px 0px',
    // borderTopWidth: 2,
    // borderRightWidth: 0,
    // borderBottomWidth: 2,
    // borderLeftWidth: 0,
    borderTopColor: 'yellow',
    borderBottomColor: 'yellow',
    // background: 'white'
  },

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
  // renderRow = () => {
  //   const numOfRow = 3
  //   for(let i=0; i<numOfRow; i++
  // }

	render() {
		return (
      <div style={styleSheet.rootWrapper}>
  			{/* <div style={styleSheet.container}>
          {this.renderDisplay()}
          {this.renderTopRow()}
          {this.renderButtons()}
  			</div> */}
        <div style={styleSheet.boardContainer}>
          <div style={styleSheet.boardRow}> </div>
          <div style={{...styleSheet.boardRow, ...styleSheet.upDownborder}}> </div>
          <div style={styleSheet.boardRow}> </div>
        </div>
      </div>
		)
	}
}

export default TicTacToe
