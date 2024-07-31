import { useState, useContext} from 'react'
import { Circle } from "./Circle"
import { GameContext } from './context/GameContext';

export function Box({id}) {
    const { turn, setTurn, newArray } = useContext(GameContext)
    const [circulo, setCirculo] = useState(false)
    const [isClicked, setIsClicked] = useState(false);
    const [color, setColor] = useState("blue")

    const handleClick = (e) => {
        // let id = e.target.className.split(" ")[1]
        // console.log(id)
        // console.log(newArray)
        newArray[id] = "hola"
        setTurn(prev => !prev)
        setCirculo(true)
        if(turn == true){
            setColor("blue")
        } else {
            setColor("red")
        }
        setIsClicked(true);
    };

    return (
        <div className={`box ${id}`} onClick={!isClicked ? handleClick : null} style={{ pointerEvents: isClicked ? 'none' : 'auto' }}>
            {circulo && <Circle color={color}/>}
        </div>
    )
}