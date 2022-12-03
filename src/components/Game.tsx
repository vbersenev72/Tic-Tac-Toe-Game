import * as React from 'react';
import Board from './Board';
import "./styles_Components/Game.css"
import { calculateWinner } from '../helper';

import { useState } from 'react';

export interface IGameProps {

}



export default function Game (props: IGameProps) {
  
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setxIsNext] = useState(true)  
  const winner = calculateWinner(board)


  const clickSquare = (index: number) => {

    const boardCopy = [...board]

    // определить был ли клик по ячейке или игра окончена
    if(winner || boardCopy[index]) return null

    // определить чей ход. X или O
    boardCopy[index] = xIsNext ? "X" : "O"

    // обновить стейт
    setBoard(boardCopy)
    setxIsNext(!xIsNext)

  }
  
    return (
    <div className='game_wrapper'>
      <Board squares={board} click = {clickSquare}/>
    </div>
  );
}
