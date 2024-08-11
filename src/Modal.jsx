import React, { useState, useContext } from "react";
import "./Modal.css";
import { GameContext } from './context/GameContext';

export default function Modal() {
  const { turn, reset, modal, toggleModal } = useContext(GameContext)
  const className = `win-color ${turn ? 'red-text' : 'blue-text'}`

  return (
    <>
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2>Win for <span className={className}>{turn ? 'red' : 'blue'}</span></h2>
            <button className='reset' onClick={() => {reset(); toggleModal()}}>Reset</button>
          </div>
        </div>
      )}
    </>
  );
}