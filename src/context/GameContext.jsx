import { createContext, useEffect, useState } from "react";

export const GameContext = createContext();

export function GameContextProvider({ children }) {
    const [turn, setTurn] = useState(true)
    const boxes = Array.from({ length: 42 });
    const [arrayCol, setArrayCol] = useState([
        [[],[],[],[],[],[]],
        [[],[],[],[],[],[]],
        [[],[],[],[],[],[]],
        [[],[],[],[],[],[]],
        [[],[],[],[],[],[]],
        [[],[],[],[],[],[]],
        [[],[],[],[],[],[]]
    ]);

    function reset(){
        setTurn(true)
    }

    


    return (
        <GameContext.Provider value={{ turn, setTurn, boxes, reset, arrayCol, setArrayCol }}>
            {children}
        </GameContext.Provider>
    )
}
