import { useState, useContext } from 'react'
import { Circle } from "./Circle"
import { GameContext } from './context/GameContext';

export function Box({ id, col }) {
    const { turn, setTurn, arrayCol, setArrayCol } = useContext(GameContext)
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        if (isClicked) return;
        
        const updatedArray = [...arrayCol];

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
        if(arrayCol[col][0].filled == true){
            setIsClicked(true);
            console.log("eliminar evento")
        }
    };

    const DetectarColumna = () => {
        if (arrayCol[col][id].filled) {
            return <Circle color={arrayCol[col][id].color} />;
         } 
         return null
    }

    return (
        <div className={`box ${id}`} onClick={handleClick}>
            <DetectarColumna></DetectarColumna>
        </div>
    )
}