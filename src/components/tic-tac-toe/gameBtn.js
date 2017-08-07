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

  // setButton = () => {
  //     const ownerId = this.state.ownerId
  //     // console.log('click: status', status)
  //     if (ownerId !== IdEmpty) return
  //
  //     this.props.clickBtn()
  //     const player = this.props.playerClicked
  //     const newOwnerId = player ? player.id : IdEmpty
  //     this.setState({ownerId: newOwnerId})
  // }

  // player: 'O', 'X', 'Empty', 'Disabled'
	render = () => {
    // console.log('render... this.state.status=', this.state.status)
		const playerId = this.props.playerClicked && this.props.playerClicked.id
    const color = playerId === 'O' ? styleSheet.playerO : styleSheet.playerX

		return (
			<button style={{...styleSheet.container, ...color}} onClick={this.props.clickBtn}>
        {playerId}
      </button>
		)
	}
}
export default Btn
