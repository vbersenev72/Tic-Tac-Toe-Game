import * as React from 'react';
import './styles_Components/Board.css'
import Square from './Square';

export interface IBoardProps {
    squares: any;
    click: any

}

export default function Board (props: IBoardProps) {
  return (
    <div className='game_board'>
      {
        props.squares.map((square:any, i:any) =>
            <Square key={i} value={square} onClick={() => props.click(i)}/>)
      }  
    </div>
  );
}
