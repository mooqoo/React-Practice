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
//     player: 'O', // 'O' or 'X'
// }
class TurnIndicator extends React.Component {

	render = () => {
		const player = this.props.player || Player.O
    const color = player === Player.O ? styleSheet.playerO : styleSheet.playerX

		return (
			<div style={{...styleSheet.container, ...color}}>
				{/* <div style={color}> */}
          {`${player.id} turn`}
        {/* </div> */}
			</div>
		)
	}
}
export default TurnIndicator
