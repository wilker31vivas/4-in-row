import { createContext, useEffect, useState } from "react";
import { resolveCol, resolveRow, resolveDiagonal, wins } from "../logic/constant";
import confetti from "canvas-confetti";
import sonido from "../sound/sound-win.mp3"
export const GameContext = createContext();

export function GameContextProvider({ children }) {
    const reproducirSonido = () =>{
        const audio = new Audio(sonido)
        audio.play()
    }
    const [turn, setTurn] = useState(true)
    const initialArrayCol = Array(7).fill(null).map(() => Array(6).fill(null).map(() => ({ filled: false, color: null })))
    const boxes = Array.from({ length: 42 });
    const [arrayBoxs, setArrayBoxs] = useState(initialArrayCol);
    const [flattenedArray, setFlattenedArray] = useState(initialArrayCol.flat());

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
      };
    
      if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }

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
            toggleModal()
            confetti()
            reproducirSonido()
        }
    }, [arrayBoxs, flattenedArray])


    return (
        <GameContext.Provider value={{ turn, setTurn, boxes, reset, arrayBoxs, setArrayBoxs, toggleModal, modal }}>
            {children}
        </GameContext.Provider>
    )
}
