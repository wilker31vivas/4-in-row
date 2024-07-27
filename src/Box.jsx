import { useState, useContext} from 'react'
import { Circle } from "./Circle"
import { GameContext } from './context/GameContext';

export function Box() {
    const [circulo, setCirculo] = useState(false)
    const { turn, setTurn } = useContext(GameContext)
    const [color, setColor] = useState("blue")
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
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
        <div className="box" onClick={!isClicked ? handleClick : null} style={{ pointerEvents: isClicked ? 'none' : 'auto' }}>
            {circulo && <Circle color={color}/>}
        </div>
    )
}