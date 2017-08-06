import React from 'react'


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

  setButton = () => {
      const ownerId = this.state.ownerId
      // console.log('click: status', status)
      if (ownerId !== IdEmpty) return

      this.props.clickBtn()
      const player = this.props.playerClicked
      const newOwnerId = player ? player.id : IdEmpty
      this.setState({ownerId: newOwnerId})
  }

	render = () => {
    // console.log('render... this.state.status=', this.state.status)
		const player = this.props.playerClicked // || {id: ''}
    const color = player.id === 'O' ? styleSheet.playerO : styleSheet.playerX

		return (
			<button style={{...styleSheet.container, ...color}} onClick={this.setButton}>
        {this.state.ownerId}
      </button>
		)
	}
}
export default Btn
