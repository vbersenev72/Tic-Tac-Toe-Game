import * as React from 'react';
import "./styles_Components/Square.css"

export interface ISquareProps {
    value: any

    onClick: any
}

export default function Square (props: ISquareProps) {
  return <button className='game_square' onClick={props.onClick}> {props.value} </button>;
}
