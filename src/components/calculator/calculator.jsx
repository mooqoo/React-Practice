import React from 'react'

import NumBtn from './numBtn'
import {nthArray, range} from '../../utils/utils'

const styleSheet = {
  rootWrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    margin: 30,
  },

  container: {
    display: "flex",
    flexDirection: "column",
    width: 450,
    height: 600,
    background: "rgb(150, 150, 150)",
    borderStyle: "solid",
    borderRadius: 4,
    borderWidth: 5,
    borderColor: 'black',
  },

  display: {
    display: "flex",
    flex: 1.2,
    fontSize: 40,
    fontWeight: "600",
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  topRow: {
    display: "flex",
    flex: 1,
    background: "green",
  },

  numPad: {
    display: "flex",
    flex: 4,
    flexDirection: "row",
    background: "pink",
  },

  numSection: {
    display: "flex",
    flex: 3,
    flexDirection: "column",
    background: "gray",
  },

  opSection: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    background: "black",
  },

  row: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
  },

  btn: {
    display: "flex",
    flex: 1,
    fontSize: 30,
  }

}

// render helper method
const renderRow = (view) => <div style={styleSheet.row}>{view}</div>

const renderNumBtns = (updateDisplay) => {
  return (
    <div style={styleSheet.numSection}>
      {renderRow(range(7, 9).map(i => <NumBtn style={styleSheet.btn} key={i} num={i} update={updateDisplay} />))}
      {renderRow(range(4, 6).map(i => <NumBtn style={styleSheet.btn} key={i} num={i} update={updateDisplay} />))}
      {renderRow(range(1, 3).map(i => <NumBtn style={styleSheet.btn} key={i} num={i} update={updateDisplay} />))}
      {renderRow([
        <NumBtn style={styleSheet.btn} key={"."} num={"."} update={updateDisplay} />,
        <NumBtn style={styleSheet.btn} key={0} num={0} update={updateDisplay} />,
        <NumBtn style={styleSheet.btn} key={"="} num={"="} update={updateDisplay} />
      ])}
    </div>
  )
}

const renderOpBtns = (updateDisplay) => (
  <div style={styleSheet.opSection}>
    <NumBtn style={styleSheet.btn} key={"/"} num={"/"} update={updateDisplay} />
    <NumBtn style={styleSheet.btn} key={"*"} num={"*"} update={updateDisplay} />
    <NumBtn style={styleSheet.btn} key={"-"} num={"-"} update={updateDisplay} />
    <NumBtn style={styleSheet.btn} key={"+"} num={"+"} update={updateDisplay} />
  </div>
)


class Calc extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      display: "0",
      haveDecimal: false,
    }
  }

  // --- update method ---
  containsCalculation = (string) => string.includes("+")
    || string.includes("-")
    || string.includes("*")
    || string.includes("/")

  calculate = (string) => {
    if (!this.containsCalculation(string)) return string

    const [aString, op, bString] = string.split(' ')
    const a = parseInt(aString)
    const b = parseInt(bString)

    if (op === '+') return a + b + ""
    if (op === '-') return a - b + ""
    if (op === '*') return a * b + ""
    if (op === '/') return a / b + ""
  }

  operationResult = (display, operation) => {
    const op = ` ${operation} `
    if (this.containsCalculation(display)) return this.calculate(display) + op
    return display + op
  }

  deleteLastUnit = (string) => {
    // if last index is space then it is a operation
    if (string.length <= 1) return "0"
    if (string.slice(-1) === ' ') return string.substring(0, string.length - 3)
    return string.substring(0, string.length - 1)
  }

  handleOperation = (display, operation) => {
    switch (operation) {
      case "+": return this.operationResult(display, "+")
      case "-": return this.operationResult(display, "-")
      case "*": return this.operationResult(display, "*")
      case "/": return this.operationResult(display, "/")
      case "=": return this.calculate(display)
      case "DEL": return this.deleteLastUnit(display)
      case "AC": return "0"
      case ".": return display + "."
      default: return display
    }
    return "0"
  }

  updateDisplay = (input) => {
    let display = this.state.display
    let newDisplay = display

    if (isNaN(input)) newDisplay = this.handleOperation(display, input)
    else newDisplay = display === "0" ? input + "" : display + input

    this.setState({display: newDisplay})
  }

	// --- render method ---
  renderDisplay = () => {
    return (
      <div style={styleSheet.display}>
        {this.state.display}
      </div>
    )
  }

  renderTopRow = () => {
    return (
      <div style={styleSheet.topRow}>
        <NumBtn style={styleSheet.btn} key={"AC"} num={"AC"} update={this.updateDisplay} />
        <NumBtn style={styleSheet.btn} key={"DEL"} num={"DEL"} update={this.updateDisplay} />
      </div>
    )
  }

  renderButtons = () => {
    return (
      <div style={styleSheet.numPad}>
        {renderNumBtns(this.updateDisplay)}
        {renderOpBtns(this.updateDisplay)}
      </div>
    )
  }

  // --- render ---
	render() {
		return (
      <div style={styleSheet.rootWrapper}>
  			<div style={styleSheet.container}>
          {this.renderDisplay()}
          {this.renderTopRow()}
          {this.renderButtons()}
  			</div>
      </div>
		)
	}
}

export default Calc
