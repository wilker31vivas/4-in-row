import { useEffect, useState, useContext, useRef } from 'react'
import { Circle } from "./Circle"
import { GameContext } from './context/GameContext';

export function Box(){
    const divRef = useRef(null);
    const [circulo, setCirculo] = useState(false)
    const {turn, setTurn} = useContext(GameContext)
    const [color, setColor] = useState("blue")

    useEffect(() => {

        const handleClick = () => {
            console.log('Div clicked');
            setCirculo(true);
            
            if (divRef.current) {
                setTurn(prev => !prev);
                console.log(turn)
                if (turn == true) {
                    setColor("red")
                } else {
                    setColor("red")
                    console.log("rojo")
                }
                divRef.current.removeEventListener('click', handleClick);
            }
        };

        const divElement = divRef.current;
        if (divElement) {
            divElement.addEventListener('click', handleClick);
        }

        // Cleanup function to remove the event listener when the component unmounts or dependencies change
        return () => {
            if (divElement) {
                divElement.removeEventListener('click', handleClick);
            }
        };
    }, []);

   

    return(
        <div className="box" ref={divRef}>
            {circulo && <Circle color={color}/>}
        </div>
    )
}