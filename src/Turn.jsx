import React from 'react'
import { Circle } from './Circle'
import { useContext } from 'react'
import { GameContext } from './context/GameContext'

export function Turn() {
    const { turn } = useContext(GameContext)

  return (
    <div className='turn-box'>
        <h1>Turn is:</h1>
        <span className={turn ? "square-blue" : "square-red"}/>
    </div>
  )
}
