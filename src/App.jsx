import { useContext } from 'react'
import './App.css'
import { Box } from './Box'
import { GameContext } from './context/GameContext';

function App() {
  const {boxes, turn, reset} = useContext(GameContext)

  return (
    <main>
      <h1>4 en filas</h1>
      <div className="grid">
        {boxes.map((_, i)=>{
          return <Box key={i} id={i}></Box>
        })}
      </div>
      <button onClick={reset}>Reiniciar</button>
      <div>
        <h2>El turno es de : {turn == true ? 'azul' : 'rojo'}</h2>
      </div>
    </main>
  )
}

export default App
