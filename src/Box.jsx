import { useState, useContext} from 'react'
import { Circle } from "./Circle"
import { GameContext } from './context/GameContext';

export function Box({id}) {
    const { turn, setTurn } = useContext(GameContext)
    const [circulo, setCirculo] = useState(false)
    const [isClicked, setIsClicked] = useState(false);
    const [color, setColor] = useState("blue")

    const handleClick = (e) => {
        setTurn(prev => !prev)
        setCirculo(true)
        console.log(e.target.className)
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