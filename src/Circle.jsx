import { GameContext } from './context/GameContext';
import { useEffect, useState, useContext } from 'react'

export function Circle({color}){
    const className = `circle ${color}`


    function handleClick(e){
    }

    return(
        <div className={className} onClick={(e)=> handleClick(e)}>
        </div>
    )
}