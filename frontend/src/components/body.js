import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PPTLSForm from './PPTLSForm';
import PPTLSResults from './PPTLSResults';
import TamagotchiResults from './tamagotchiResults';

const Body = () => {
  function hide() {
    document.getElementById("tamagotchi").style.display = "none";
    document.getElementById("rpsls").style.display = "none";
    document.getElementById("title").style.display = "none";
  }

  function show() {
    document.getElementById("tamagotchi").style.display = "inline";
    document.getElementById("rpsls").style.display = "inline";
    document.getElementById("title").style.display = "block";
    setShowPPTLSResults(false);
    setShowTamagotchiResults(false);
  }

  const [showTamagotchiResults, setShowTamagotchiResults] = useState(false);
  const [showPPTLSResults, setShowPPTLSResults] = useState(false);

  const handlePPTLS = () => {
    if (showPPTLSResults === false) {
      setShowPPTLSResults(true);
    } else if (showPPTLSResults === true){
      setShowPPTLSResults(false);
    }
  }

  const handleTamagotchi = () => {
    if (showTamagotchiResults === false) {
      setShowTamagotchiResults(true);
    } else if (showTamagotchiResults === true){
      setShowTamagotchiResults(false);
    }
  }

  return (
    <>
      <h3 id='title' className='mt-2'>Choose a game!</h3>
      <Link to="/tamagotchi">
        <button id='tamagotchi' className='btn btn-primary mx-2' onClick={hide}><img src={"../../assets/tamagotchi.png"} /></button>
      </Link>
      <Link to="/rpsls">
        <button id="rpsls" className='btn btn-primary mx-2' onClick={hide}><img src={"../../assets/rpsls.png"} /></button>
      </Link>
      <br />
      <Link to="/home">
        <button className='btn btn-primary mx-2 fs-5' onClick={show}>Return</button>
      </Link>
      <div>
        <button className='btn btn-warning' onClick={handleTamagotchi}>Results Tamagotchi</button>
        {showTamagotchiResults && <TamagotchiResults />}
      </div>
      <div>
        <button className='btn btn-warning' onClick={handlePPTLS}>Results PPTLS</button>
        {showPPTLSResults && <PPTLSResults />}
      </div>
    </>
  );
};

export default Body;
