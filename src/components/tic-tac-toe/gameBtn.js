import React from 'react'
import {Player} from './index'

const styleSheet = {
  container: {
    flex: 1,
    fontSize: 80,
  },

  playerX: {
    color: 'black',
  },

  playerO: {
    color: 'green',
  },
}

// props: {
//    playerClicked: 'O', // 'O' or 'X'
//    clickBtn: function
// }
export const IdEmpty = ''

class Btn extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ownerId: IdEmpty,
    }
  }

  onClick = () => {
    const playerId = this.props.playerClicked && this.props.playerClicked.id
    if (playerId) return
    this.props.clickBtn()
  }

  // player: 'O', 'X', '-', null
	render = () => {
		const playerId = this.props.playerClicked && this.props.playerClicked.id
    const color = playerId === 'O' ? styleSheet.playerO : styleSheet.playerX

		return (
			<button style={{...styleSheet.container, ...color}} onClick={this.onClick}>
        {playerId}
      </button>
		)
	}
}
export default Btn
