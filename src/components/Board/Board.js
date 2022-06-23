import Square from "../Square/Square";
import './Board.css';

const Board = ({squares, onClick, turn, winningSquares }) => {

    const createSquares = values => (
        values.map( value => (
            <Square
                winner={winningSquares.includes(value)}
                turn={turn}
                onClick={() => onClick(value)}
                value={squares[value]}
                key={`square_${value}`}
            />
        ))
    );

    return (
        <div className="board">
            <div className="row">
               {createSquares([0,1,2,3,4])}
            </div>
            <div className="row">
                {createSquares([5,6,7,8,9])}
            </div>
            <div className="row">
                {createSquares([10,11,12,13,14])}
            </div>
            <div className="row">
                {createSquares([15,16,17,18,19])}
            </div>
            <div className="row">
                {createSquares([20,21,22,23,24])}
            </div>
        </div>
    );
}

export default Board;