import { useState, useContext } from 'react'
import { Circle } from "./Circle"
import { GameContext } from './context/GameContext';

export function Box({ id, col }) {
    const { turn, setTurn, arrayCol, setArrayCol } = useContext(GameContext)
    const [circulo, setCirculo] = useState(false)
    const [isClicked, setIsClicked] = useState(false);
    const [color, setColor] = useState("blue")

    const handleClick = (e) => {
        const updatedArray = [...arrayCol];

        if (arrayCol[col][5].length == 0) {
            updatedArray[col][5] = true;
            setArrayCol(updatedArray);
        }
        console.log(col, id)

        setTurn(prev => !prev)
        setCirculo(true)
        setColor(turn ? 'blue' : 'red');
        setIsClicked(true);
    };

    const DetectarColumna = () => {
        // arrayCol[col].forEach((element, index) => {
        //     if(arrayCol[col][index].length > 0){
        //         return console.log("hola")
        //     } return null
        // });
        if (col == 0 && id == 5 && arrayCol[0][5] == true) {
           return <Circle color={color}></Circle>
         } return null
    }

    return (
        <div className={`box ${id}`} onClick={handleClick}>
            <DetectarColumna></DetectarColumna>
        </div>
    )
}