import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';

/*
const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
*/
const winningPositions = [
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [6, 7, 8, 9],
  [10, 11, 12, 13],
  [11, 12, 13, 14],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [20, 21, 22, 23],
  [21, 22, 23, 24],

  [0, 5, 10, 15],
  [5, 10, 15, 20],
  [1, 6, 11, 16],
  [6, 11, 16, 21],
  [2, 7, 12, 17],
  [7, 12, 17, 22],
  [3, 8, 13, 18],
  [8, 13, 18, 23],
  [4, 9, 14, 19],
  [9, 14, 19, 24],

  [0, 6, 12, 18],
  [6, 12, 18, 24],
  [5, 11, 17, 23],
  [1, 7, 13, 19],
  
  [4, 8, 12, 16],
  [8, 12, 16, 20],
  [9, 13, 17, 21],
  [3, 7, 11, 15]
];


const App = () => {

  const [turn, setTurn] = useState('X');
  const [squares, setSquares] = useState(Array(25).fill(null));
  const [winningSquares, setWinningSquares] = useState([]);
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });

  const reset = () => {
    setTurn('X');
    setSquares(Array(25).fill(null));
    setWinningSquares([]);
  }

  const checkForWinner = newSquares => {
    for(let i = 0; i < winningPositions.length; i++) {
      const [a,b,c,d] = winningPositions[i];
      if(newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c] && newSquares[a] === newSquares[d]) {
        endGame(newSquares[a], winningPositions[i]);
        return
      }
    }

    if(!newSquares.includes(null)) {
      endGame(null, Array.from(Array(25).keys()));
      return
    }
    setTurn(turn === 'X' ? 'O' : 'X');
  }

  const handleClick = square => {
    let newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    checkForWinner(newSquares);
  }

  const endGame = (result, winningPositions) => {
    setTurn(null);
    if(result !== null) {
      setScore({
        ...score,
        [result]: score[result] + 1,
      })
    }
    setWinningSquares(winningPositions);
    setTimeout(reset, 2000);
  }

  return (
    <div className="container">
      <Board winningSquares={winningSquares} turn={turn} squares={squares} onClick={handleClick}/>
      <ScoreBoard scoreO={score.O} scoreX={score.X} />
    </div>
  );
}

export default App;