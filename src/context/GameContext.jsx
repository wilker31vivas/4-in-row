import { createContext, useEffect, useState } from "react";
import { resolveCol, wins } from "../logic/constant";

export const GameContext = createContext();

export function GameContextProvider({ children }) {
    const [turn, setTurn] = useState(true)
    const initialArrayCol = Array(7).fill(null).map(() => Array(6).fill(null).map(()=> ({filled : false, color : null})))
    const boxes = Array.from({ length: 42 });
    const [arrayCol, setArrayCol] = useState(initialArrayCol);

    function reset(){
        setTurn(true)
    }

    useEffect(()=>{
        resolveCol(arrayCol)
        const repuesta = wins.some(element => element)
        console.log(repuesta)
        if(repuesta){
            alert("ganaste")
        }
    },[arrayCol])


    return (
        <GameContext.Provider value={{ turn, setTurn, boxes, reset, arrayCol, setArrayCol }}>
            {children}
        </GameContext.Provider>
    )
}
