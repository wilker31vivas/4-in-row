import { createContext, useEffect, useState } from "react";

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
        
    },[arrayCol])

    
// 0: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 1: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 2: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 3: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 4: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 5: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 6: (6) [{…}, {…}, {…}, {…}, {…}, {…}]


    return (
        <GameContext.Provider value={{ turn, setTurn, boxes, reset, arrayCol, setArrayCol }}>
            {children}
        </GameContext.Provider>
    )
}
