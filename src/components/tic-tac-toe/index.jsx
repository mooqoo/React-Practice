import React from 'react'

import {nthArray, range} from '../../utils/utils'
import TurnIndicator from './turnIndicator'
import Btn, {Status} from './gameBtn'

const styleSheet = {
  rootWrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
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

  // --- style for tic-tac-toe board ---
  boardRow: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    background: 'green',
  },

  sideborder: {
    borderStyle: 'solid',
    borderWidth: '0px 2px 0px 2px',
    borderLeftColor: 'yellow',
    borderRightColor: 'yellow',
  },

  upDownborder: {
    borderStyle: 'solid',
    borderWidth: '2px 0px 2px 0px',
    borderTopColor: 'yellow',
    borderBottomColor: 'yellow',
  },

  // --- replayBtn ---
  replayBtn: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
    paddingRight: 50,
    paddingLeft: 50,
  }
}

export const Player = {
  O: {id: 'O', value: 1},
  X: {id: 'X', value: -1},
}

const BoardSize = 3
const EmptyGameBoard = [
  new Array(BoardSize),
  new Array(BoardSize),
  new Array(BoardSize)
]

// --- helper method ---
const haveRowWin = (gameboard) => gameboard.reduce((rowWin, row, index) => {
  let rowSum = row.reduce((sum, value) => sum + value, 0)
  return rowWin || Math.abs(rowSum) === 3
}, false)

const haveColumnWin = (gameboard) => gameboard.reduce((columnWin, row, index, gameboard) => {
  let columnSum = 0
  for(let i=0; i<gameboard.length; i++) {
    columnSum += gameboard[i][index]
  }
  return columnWin || Math.abs(columnSum) === 3
}, false)

const haveDiagWin = (gameboard) => {
  let diagSum = gameboard[0][0] + gameboard[1][1] + gameboard[2][2]
  let diagSum2 = gameboard[0][2] + gameboard[1][1] + gameboard[2][0]
  return Math.abs(diagSum) === 3 || Math.abs(diagSum2) === 3
}

const haveWin = (gameboard) => haveRowWin(gameboard)
  || haveColumnWin(gameboard)
  || haveDiagWin(gameboard)

class TicTacToe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPlayer: Player.O,
      gameBoard: EmptyGameBoard,
      gamePlayStack: [],
      // score: [0, 0, 0, 0, 0, 0, 0, 0]
      // rowScore: [0, 0, 0],
      // columnScore: [0, 0, 0],
      // diagScore: [0, 0],
    }
  }

  addActionToStack = () => {

  }

  // --- update method ---
  // TODO... this will update state..
  // so maybe move 2.) and 3.) out of this fuction and make it react through state change
  handlePlayerTic = (row, column, player) => () => {
    // 1.) mark it on gameBoard
    // add to gameboard array // {x, y, player}
    console.log('row=' + row + ', column=' + column + ', player=' + player)
    let gameBoard = this.state.gameBoard
    gameBoard[row][column] = player.value

    // 2.) determin is win
    let gameHaveWin = haveWin(gameBoard)
    console.log('gameHaveWin = ', gameHaveWin)

    // 3.)
    if (gameHaveWin) {
      // TODO handle win
      console.log('Winner is ', this.state.currentPlayer.id)
    } else {
      // 3.) switch player
      this.switchPlayer()
    }

    this.setState({gameBoard})
  }

  switchPlayer = () => {
    const player = this.state.currentPlayer
    this.setState({currentPlayer: player === Player.O
      ? Player.X
      : Player.O
    })
  }

  resetGame = () => {

  }

  // --- render ---
  renderBlock = (row) => range(0, 2).map(i => {
    const border = i==1 ? styleSheet.sideborder : {}
    const player = this.state.currentPlayer
    return (
      <Btn key={i}
        playerClicked={player}
        clickBtn={this.handlePlayerTic(row, i, player)}
      />
    )
  })

  renderRow = () => range(0, 2).map(i => {
    const border = i==1 ? styleSheet.upDownborder : {}
    return (
      <div key={i} style={{...styleSheet.boardRow, ...border}}>
        {this.renderBlock(i)}
      </div>
    )
  })

	render() {
		return (
      <div style={styleSheet.rootWrapper}>

        <TurnIndicator player={this.state.currentPlayer}/>

        {/* render game board */}
        <div style={styleSheet.boardContainer}>
          {this.renderRow()}
        </div>

        <button
          style={styleSheet.replayBtn}
          onClick={this.resetGame}>
          Replay
        </button>

      </div>
		)
	}
}

export default TicTacToe
