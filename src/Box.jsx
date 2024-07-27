import { useEffect, useState, useContext, useRef } from 'react'
import { Circle } from "./Circle"
import { GameContext } from './context/GameContext';

export function Box() {
    const divRef = useRef(null);
    const [circulo, setCirculo] = useState(false)
    const { turn, setTurn } = useContext(GameContext)
    const [color, setColor] = useState("blue")

    useEffect(() => {
        const handleClick = () => {
            console.log('Div clicked');
            setCirculo(true);

            if (divRef.current) {
                setTurn(prev => !prev);
                console.log(turn)
                if (turn == true) {
                    setColor("blue")
                } else {
                    setColor("red")
                }
                divRef.current.removeEventListener('click', handleClick);
            }
        };

        const divElement = divRef.current;
        if (divElement) {
            divElement.addEventListener('click', handleClick);
            console.log("evento agregado")
        }

        

    }, [])



    return (
        <div className="box" ref={divRef} >
            {circulo && <Circle color={color} />}
        </div>
    )
}