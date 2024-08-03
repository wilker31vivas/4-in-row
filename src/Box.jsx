import { useState, useContext } from 'react'
import { Circle } from "./Circle"
import { GameContext } from './context/GameContext';

export function Box({ id, col }) {
    const { turn, setTurn, arrayCol, setArrayCol } = useContext(GameContext)
    const [circulo, setCirculo] = useState(false)
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        const updatedArray = [...arrayCol];

        for(let i = 5; i >= 0; i--){
            let index = updatedArray[col][i].length
            if (index === 0){
                updatedArray[col][i] = true;
                 setArrayCol(updatedArray);
                 break
            } 
        }

        setTurn(prev => !prev)
        setCirculo(true)
        setIsClicked(true);
    };

    const DetectarColumna = () => {
        let color;
        if(turn){
            color = "blue";
        } else {
            color = "red"
        }
        if (arrayCol[col][id] == true) {
           return <Circle color={color}></Circle>
         } 
         return null
    }

    return (
        <div className={`box ${id}`} onClick={handleClick}>
            <DetectarColumna></DetectarColumna>
        </div>
    )
}