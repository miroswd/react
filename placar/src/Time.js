import React from 'react';

import BotaoGol from './BotaoGol'

export default function Time(props){
  return(
    <div class="time-info">
      <h1 class="nome-time">{props.nome}</h1>
      <h2 class="gol">{props.gols}</h2>
      <BotaoGol marcarGol={props.marcarGol} removeGol={props.removeGol}/>
    </div>
  )
}