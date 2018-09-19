import React, { Component } from "react";
import Square from "./Square";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      isXturn: true
    };
  }

  handleClick = i => {
    let squaresHandle = this.state.squares.slice(); // create a copy of the array
    //prevent the change of an already set value
    if (squaresHandle[i] == null) {
      squaresHandle[i] = this.state.isXturn ? "X" : "O";
      this.setState({
        squares: squaresHandle,
        isXturn: !this.state.isXturn
      });
    }
  };

  renderSquare = i => {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  };

  determineWinner = () => {
    let msg = this.state.isXturn ? "Next Player: X" : "Next Player: O";
    let { squares } = this.state;
    if (
      squares[0] === squares[1] &&
      squares[0] === squares[2] &&
      squares[0] != null
    )
      msg = <h6>Game Over! {squares[0]} won</h6>;
    else if (
      squares[3] === squares[4] &&
      squares[3] === squares[5] &&
      squares[3] != null
    )
      msg = <h6>Game Over! {squares[3]} won</h6>;
    else if (
      squares[6] === squares[7] &&
      squares[6] === squares[8] &&
      squares[6] != null
    )
      msg = <h6>Game Over! {squares[6]} won</h6>;
    else if (
      squares[0] === squares[3] &&
      squares[0] === squares[6] &&
      squares[0] != null
    )
      msg = <h6>Game Over! {squares[0]} won</h6>;
    else if (
      squares[1] === squares[4] &&
      squares[1] === squares[7] &&
      squares[1] != null
    )
      msg = <h6>Game Over! {squares[1]} won</h6>;
    else if (
      squares[2] === squares[5] &&
      squares[2] === squares[8] &&
      squares[2] != null
    )
      msg = <h6>Game Over! {squares[2]} won</h6>;
    return msg;
  };

  render() {
    // count score
    let xCounter = 0;
    let oCounter = 0;
    this.state.squares.forEach(element => {
      if (element != null) {
        if (element === "X") xCounter += 1;
        else oCounter += 1;
      }
    });

    return (
      <div className="Board">
        <div className="row">
          <div className="col-sm-12 player">{this.determineWinner()}</div>
          <div className="col-sm-4">{this.renderSquare(0)}</div>
          <div className="col-sm-4">{this.renderSquare(1)}</div>
          <div className="col-sm-4">{this.renderSquare(2)}</div>
          <div className="col-sm-4">{this.renderSquare(3)}</div>
          <div className="col-sm-4">{this.renderSquare(4)}</div>
          <div className="col-sm-4">{this.renderSquare(5)}</div>
          <div className="col-sm-4">{this.renderSquare(6)}</div>
          <div className="col-sm-4">{this.renderSquare(7)}</div>
          <div className="col-sm-4">{this.renderSquare(8)}</div>
        </div>
      </div>
    );
  }
}

export default Board;
