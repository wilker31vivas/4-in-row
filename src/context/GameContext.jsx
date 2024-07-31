import { createContext, useEffect, useState } from "react";

export const GameContext = createContext();

export function GameContextProvider({ children }) {
    const [turn, setTurn] = useState(true)
    const boxes = Array.from({ length: 42 });
    const newArray = Array.from({ length: 42 });

    function reset(){
        setTurn(true)
    }

    return (
        <GameContext.Provider value={{ turn, setTurn, boxes, reset, newArray}}>
            {children}
        </GameContext.Provider>
    )
}
