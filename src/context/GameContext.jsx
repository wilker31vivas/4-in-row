import { createContext, useState } from "react";

export const GameContext = createContext();

export function GameContextProvider({ children }) {
    const [turn, setTurn] = useState(true)
    const boxes = Array.from({ length: 42 });
    const newArray = [
        [[], [], [], [], [], []],
        [[], [], [], [], [], []],
        [[], [], [], [], [], []],
        [[], [], [], [], [], []],
        [[], [], [], [], [], []],
        [[], [], [], [], [], []]
    ]

    console.log(newArray[5])

    return (
        <GameContext.Provider value={{ turn, setTurn, boxes }}>
            {children}
        </GameContext.Provider>
    )
}
