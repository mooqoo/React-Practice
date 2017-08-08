import React from 'react'

import {Player} from './index'

const styleSheet = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'stretch',
    margin: 10,
    padding: 15,
    borderStyle: 'solid',
    borderWidth: 20,
    borderColor: 'black',
    background: 'white',
    fontSize: 40,
  },

  playerX: {
    color: 'black',
  },

  playerO: {
    color: 'green',
  },
}

// props: {
//    player: 'O', // 'O' or 'X'
//    gameWin: true
// }
class TurnIndicator extends React.Component {

  displayMsg = (gameWin) => {
    const player = this.props.player.id
    if (gameWin) return `${player} win!!!`
    return `${player}'s turn`

  }
	render = () => {
		const player = this.props.player || Player.O
    const color = player === Player.O ? styleSheet.playerO : styleSheet.playerX

		return (
			<div style={{...styleSheet.container, ...color}}>
				{this.displayMsg(this.props.gameWin)}
			</div>
		)
	}
}
export default TurnIndicator
