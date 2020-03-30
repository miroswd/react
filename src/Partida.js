import React from 'react'

export default function Partida(props){

  return (
    <div>
      <h2 class="estadio">{props.partida.estadio}</h2>
      <div class="data">
        <span>{props.partida.data} - </span>
        <span>{props.partida.horario}</span>
      </div>
    </div>

)
}