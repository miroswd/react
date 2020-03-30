import React from 'react';
import ReactDOM from 'react-dom'

// Components
import PlacarContainer from './PlacarContainer'

const dados = {
  partida: {
    estadio:"San Siro - Itália",
    data:"30/03/2020",
    horario:"19h"
  },
  casa:{
    nome:"Milan",
    logo:""
  },
  visitante:{
    nome:"Juventus"
  }
}

ReactDOM.render(
  <PlacarContainer 
  // partida={dados.partida}
  // casa={dados.casa}
  // visitante={dados.visitante}
  {...dados}
  />, 
  document.querySelector('#app')
)