import React, { useState } from "react";
import Square from "./matrex";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <div class="container">
      {isWinner ? (
        <>
          {isWinner} won the game{" "}
          <button onClick={handleReset}>Play Again</button>
        </>
      ) : (
        <>
          <h4>Player {isXTurn ? "X" : "O"} please move</h4>
          <div class="row">
            <div class="col-4">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            </div>
            <div class="col-4">
            <Square onClick={() => handleClick(1)} value={state[1]} />
            </div>
            <div class="col-4">
            <Square onClick={() => handleClick(2)} value={state[2]} />
            </div>          
          </div>
          <div className="row">
          <div class="col-4">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            </div>
            <div class="col-4">
            <Square onClick={() => handleClick(4)} value={state[4]} />
            </div>
            <div class="col-4">
            <Square onClick={() => handleClick(5)} value={state[5]} />
            </div>  
          
          </div>
          <div className="row">
          <div class="col-4">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            </div>
            <div class="col-4">
            <Square onClick={() => handleClick(7)} value={state[7]} />
            </div>
            <div class="col-4">
            <Square onClick={() => handleClick(8)} value={state[8]} />
            </div> 
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
