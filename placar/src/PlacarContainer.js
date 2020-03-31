import React, {useState} from 'react';

import './styles.css'

import Time from './Time'
import Partida from './Partida'


export default function PlacarContainer(props){

  const [golsCasa, setGolsCasa] = useState(0);
  const [golsVisitante, setGolsVisitante] = useState(0);


  // Dados
  const {casa,partida,visitante} = props;

  // Style
  const styles = {
    fonte:{
      "font-size":"15px"
    },
  }


  function marcarGolCasa(){
    setGolsCasa(golsCasa+1)
  }

  function marcarGolVisitante(){
    setGolsVisitante(golsVisitante + 1)
  }


  function removeGolCasa(){
    if (golsCasa > 0) {
      setGolsCasa(golsCasa -1)
     } else {
       alert('O número de gols, não pode ser negativo')
     }
  }

  function removeGolVisitante(){
    if (golsVisitante > 0) {
       setGolsVisitante(golsVisitante -1)
      } else {
        alert('O número de gols, não pode ser negativo')
      }
  }


  return (
      <div className="container" style={styles.fonte}>
        <div className="info">
          <div className="time">
            <h3 className="time-identifica">casa</h3>
            <Time nome={casa.nome} gols={golsCasa} marcarGol={marcarGolCasa} removeGol={removeGolCasa}></Time>
          </div>

          <div className="partida">
            <Partida partida={partida}></Partida>
          </div>

          <div className="time">
          <h3 className="time-identifica">visitante</h3>
            <Time nome={visitante.nome} gols={golsVisitante} marcarGol={marcarGolVisitante} removeGol={removeGolVisitante}></Time>
          </div>
        </div>
      </div>
  )
}


