import { useState } from 'react';
import './App.css';
import calculateWinner from './calculateWinner';

function Board() {
	const [xIsNext, setXIsNext] = useState(true);
	const [squares, setSquares] = useState(Array(9).fill('.'));

	function handleClick(i) {
		const nextSquares = squares.slice();

		if (nextSquares[i] !== '.' || calculateWinner(squares)) return;

		if (xIsNext) {
			nextSquares[i] = 'X';
		} else {
			nextSquares[i] = 'O';
		}

		setSquares(nextSquares);
		setXIsNext(!xIsNext);
	}

	const winner = calculateWinner(squares);
	let status;

	console.log(winner);
	if (winner) {
		status = `Winner ${winner}`;
	} else {
		status = `Next player ${xIsNext ? 'X' : 'O'}`;
	}


	return (
	<>
		<div className='board'>
			<div className='status'>{status}</div>
			<div className='board__row'>
				<Square value={squares[0]} onSquareClicked={() => handleClick(0)} />
				<Square value={squares[1]} onSquareClicked={() => handleClick(1)} />
				<Square value={squares[2]} onSquareClicked={() => handleClick(2)} />
			</div>
			<div className='board__row'>
				<Square value={squares[3]} onSquareClicked={() => handleClick(3)} />
				<Square value={squares[4]} onSquareClicked={() => handleClick(4)} />
				<Square value={squares[5]} onSquareClicked={() => handleClick(5)} />
			</div>
			<div className='board__row'>
				<Square value={squares[6]} onSquareClicked={() => handleClick(6)} />
				<Square value={squares[7]} onSquareClicked={() => handleClick(7)} />
				<Square value={squares[8]} onSquareClicked={() => handleClick(8)} />
			</div>
		</div>
	</>
	);
}

function Square({value, onSquareClicked}) {
	return (
		<>
			<button className='square' onClick={onSquareClicked}>
				{ value }
			</button>
		</>
	)
}
export default Board;