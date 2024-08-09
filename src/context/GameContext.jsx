import { createContext, useEffect, useState } from "react";
import { resolveCol, resolveRow, wins } from "../logic/constant";

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
        resolveRow(arrayBoxs, 5)
        resolveRow(arrayBoxs, 4)
        resolveRow(arrayBoxs, 3)
        resolveRow(arrayBoxs, 2)
        resolveRow(arrayBoxs, 1)
        resolveRow(arrayBoxs, 0)
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
