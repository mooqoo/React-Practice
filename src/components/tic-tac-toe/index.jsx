import React from 'react'
import {lensPath, set} from 'ramda'

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
  rowWrapper: {
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
  '-': {id: '-', value: 0},
}

export const getPlayer = (value) => {
  if (value === 1) return {id: 'O', value: 1}
  if (value === -1) return {id: 'X', value: -1}
  if (value === 0) return {id: '-', value: 0}
  return null
}

const BoardSize = 3
const EmptyGameBoard = [
  new Array(BoardSize).fill(null),
  new Array(BoardSize).fill(null),
  new Array(BoardSize).fill(null),
]
const test = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
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


const initState = {
  currentPlayer: Player.O,
  gameWin: false,
  gameBoard: EmptyGameBoard,
  gamePlayStack: [],
}

class TicTacToe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...initState,
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
    let gameBoard = this.state.gameBoard

    // use ramda to update to create immutable array
    let path = lensPath([row, column])
    gameBoard = set(path, player.value, gameBoard)

    // 2.) determin is win
    let gameHaveWin = haveWin(gameBoard)

    // 3.)
    if (gameHaveWin) {
      // TODO handle win
      console.log('Winner is ', this.state.currentPlayer.id)
    } else {
      // 3.) switch player
      this.switchPlayer()
    }

    this.setState({
      gameBoard,
      gameWin: gameHaveWin,
    })
  }

  switchPlayer = () => {
    const player = this.state.currentPlayer
    this.setState({currentPlayer: player === Player.O
      ? Player.X
      : Player.O
    })
  }

  resetGame = () => {
    this.setState(initState)
  }

  // --- render ---
  renderRow = (rowArray, rowIndex) => rowArray.map((value, i) => {
    const border = i==1 ? styleSheet.sideborder : {}
    const player = getPlayer(value) // player that clicked the btn
    const currentPlayer = this.state.currentPlayer

    return (
      <Btn key={i}
        playerClicked={player}
        clickBtn={this.handlePlayerTic(rowIndex, i, currentPlayer)}
      />
    )
  })


  renderGameBoard = (gameBoard) => gameBoard.map((row, i) => {
    const border = i==1 ? styleSheet.upDownborder : {}
    return (
      <div key={i} style={{...styleSheet.rowWrapper, ...border}}>
        {this.renderRow(row, i)}
      </div>
    )
  })

	render() {
		return (
      <div style={styleSheet.rootWrapper}>

        <TurnIndicator
          player={this.state.currentPlayer}
          gameWin={this.state.gameWin} />

        {/* render game board */}
        <div style={styleSheet.boardContainer}>
          {this.renderGameBoard(this.state.gameBoard)}
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
