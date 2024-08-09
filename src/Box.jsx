import { useState, useContext } from 'react'
import { Circle } from "./Circle"
import { GameContext } from './context/GameContext';

export function Box({ id, col }) {
    const { turn, setTurn, arrayBoxs, setArrayCol } = useContext(GameContext)
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        if (isClicked) return;
        
        const updatedArray = [...arrayBoxs];

        for(let i = 5; i >= 0; i--){
            let index = updatedArray[col][i].filled
            if (!index){
                updatedArray[col][i].filled = true;
                updatedArray[col][i].color = turn ? 'blue' : 'red';
                setArrayCol(updatedArray);
                 break
            } 
        }

        setTurn(prev => !prev)
        if(arrayBoxs[col][0].filled == true){
            setIsClicked(true);
            console.log("eliminar evento")
        }
    };

    const DetectarColumna = () => {
        if (arrayBoxs[col][id].filled) {
            return <Circle color={arrayBoxs[col][id].color} />;
         } 
         return null
    }

    return (
        <div className={`box ${id}`} onClick={handleClick}>
            <span>{id}</span>
            <DetectarColumna></DetectarColumna>
        </div>
    )
}