import { useContext } from 'react'
import './App.css'
import './Modal.css'
import { Box } from './Box'
import { GameContext } from './context/GameContext';
import { Circle } from './Circle';
import Modal from './Modal.jsx';

function App() {
  const { turn, arrayBoxs, reset } = useContext(GameContext)

  return (
    <main>
      <h1>Conecta 4</h1>
      <div className="grid">
        <div className="col">
          {arrayBoxs[0].map((_, i) => {
            return <Box key={i} id={i} col={0}></Box>
          })}
        </div>
        <div className="col">
          {arrayBoxs[1].map((_, i) => {
            return <Box key={i} id={i} col={1}></Box>
          })}
        </div>
        <div className="col">
          {arrayBoxs[2].map((_, i) => {
            return <Box key={i} id={i} col={2}></Box>
          })}
        </div>
        <div className="col">
          {arrayBoxs[3].map((_, i) => {
            return <Box key={i} id={i} col={3}></Box>
          })}
        </div>
        <div className="col">
          {arrayBoxs[4].map((_, i) => {
            return <Box key={i} id={i} col={4}></Box>
          })}
        </div>
        <div className="col">
          {arrayBoxs[5].map((_, i) => {
            return <Box key={i} id={i} col={5}></Box>
          })}
        </div>
        <div className="col">
          {arrayBoxs[6].map((_, i) => {
            return <Box key={i} id={i} col={6}></Box>
          })}
        </div>
        
        {/* {boxes.map((_, i)=>{
          return <Box key={i} id={i}></Box>
        })} */}
      </div>
      <Modal></Modal>
      <button className='reset' onClick={()=> reset()}>Reset</button>
    </main>
  )
}

export default App
