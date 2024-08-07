import { createContext, useEffect, useState } from "react";
import { resolveCol, resolveRowOne, resolveRowTwo, wins } from "../logic/constant";

export const GameContext = createContext();

export function GameContextProvider({ children }) {
    const [turn, setTurn] = useState(true)
    const initialArrayCol = Array(7).fill(null).map(() => Array(6).fill(null).map(()=> ({filled : false, color : null})))
    const boxes = Array.from({ length: 42 });
    const [arrayBoxs, setArrayCol] = useState(initialArrayCol);

    function reset(){
        setTurn(true)
    }

    useEffect(()=>{
        resolveCol(arrayBoxs)
        resolveRowOne(arrayBoxs)
        resolveRowTwo(arrayBoxs)
        const repuesta = wins.some(element => element)
        console.log(repuesta)
        if(repuesta){
            alert("ganaste")
        }
    },[arrayBoxs])


    return (
        <GameContext.Provider value={{ turn, setTurn, boxes, reset, arrayBoxs, setArrayCol }}>
            {children}
        </GameContext.Provider>
    )
}
