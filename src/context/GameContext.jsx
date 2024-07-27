import { createContext, useState } from "react";

export const GameContext = createContext();

export function GameContextProvider({children}) {
	const [turn, setTurn] = useState(true)

    return (
        <GameContext.Provider value={{turn, setTurn}}>
            {children}
        </GameContext.Provider>
    )
}
