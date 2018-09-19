import React, { Component } from "react";
import Board from "./Board";

class Game extends Component {
  render() {
    return (
      <div className="Game container-fluid">
        <div className="row">
          <div className="col-sm-5 text-center">
            <h6>Board</h6>
            <Board />
          </div>
          <div className="col-sm-6 offset-sm-1">
            <h6>History</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
