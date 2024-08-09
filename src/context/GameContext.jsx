import { createContext, useEffect, useState } from "react";
import { resolveCol, resolveRow, resolveDiagonal, wins } from "../logic/constant";

export const GameContext = createContext();

export function GameContextProvider({ children }) {
    const [turn, setTurn] = useState(true)
    const initialArrayCol = Array(7).fill(null).map(() => Array(6).fill(null).map(() => ({ filled: false, color: null })))
    const boxes = Array.from({ length: 42 });
    const [arrayBoxs, setArrayBoxs] = useState(initialArrayCol);
    const [flattenedArray, setFlattenedArray] = useState(initialArrayCol.flat());

    function reset() {
        setTurn(true);
        setArrayBoxs(initialArrayCol); // Resetea el estado de las casillas
        setFlattenedArray(initialArrayCol.flat()); // Resetea el array aplanado
        wins.fill(false); // Resetea el estado de las victorias
    }

    useEffect(() => {
        resolveCol(arrayBoxs)
        for (let i = 5; i >= 0; i--) {
            resolveRow(arrayBoxs, i);
        }
        resolveDiagonal(flattenedArray)
        const repuesta = wins.some(element => element)
        console.log(repuesta)
        if (repuesta) {
            alert("ganaste")
        }
    }, [arrayBoxs, flattenedArray])


    return (
        <GameContext.Provider value={{ turn, setTurn, boxes, reset, arrayBoxs, setArrayBoxs }}>
            {children}
        </GameContext.Provider>
    )
}
