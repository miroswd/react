import React from 'react'

export default function BotaoGol(props){

  function handleClick(event){
    event.preventDefault();

    props.marcarGol()
  }

  function handleClickReverse(event){
    event.preventDefault();
    props.removeGol()
  }

  return (
    <>
    <button onClick={handleClick}>GOL</button>
    <button class="fake" onClick={handleClickReverse}>FAKE</button>
    </>
  )
}