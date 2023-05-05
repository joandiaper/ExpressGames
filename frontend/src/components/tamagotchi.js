import React, { useState, useEffect } from 'react';
import '../css/tamagotchi.css';
import TamagotchiForm from './tamagotchiForm';

function Tamagotchi() {
  const substractPoints = 1, addPoints = 5;
  const [name, setName] = useState('Joan');
  const [age, setAge] = useState(0);
  const [months, setMonths] = useState(0);
  const [hunger, setHunger] = useState(0);
  const [happiness, setHappiness] = useState(100);
  const [health, setHealth] = useState(100);
  const [paused, setPaused] = useState(false);
  const [isDead, setIsDead] = useState(false);

  useEffect(() => {
    let interval;

    if (health > 0 && happiness > 0 && hunger < 100) {
      interval = setInterval(() => {
        //if (!paused) {

        setMonths(months => months + 1);
        if (months == 12) {
          setAge(age => age + 1);
          setMonths(0);
        }
        setHealth(health => Math.max(0, health - 1));
        setHappiness(happiness => Math.max(0, happiness - 1));
        //setHunger(hunger => Math.min(0, hunger + 1));
        setHunger(hunger => Math.min(100, hunger + 1));

        //}
      }, 200);
      //console.log(health + " " + happiness + " " + hunger);
    } else {
      console.log(health + " " + happiness + " " + hunger)
      clearInterval(interval);

      if (health == 0) {
        document.getElementById("messageDie").innerHTML = name + " died due to health";
      } else if (happiness == 0) {
        document.getElementById("messageDie").innerHTML = name + " died due to lack of happiness";
      } else {
        document.getElementById("messageDie").innerHTML = name + " died from starvation";
      }

      document.getElementById("buttonFeed").disabled = true;
      document.getElementById("buttonPlay").disabled = true;
      document.getElementById("buttonSleep").disabled = true;
      setIsDead(true);
      //alert("You died");
    }

    return () => clearInterval(interval);

  }, [health, happiness, hunger]);



  const handlePause = () => {
    setPaused(paused => !paused);
  };

  const feed = () => {
    setHunger(hunger => Math.max(0, hunger - 10));
    setHealth(health => Math.min(100, health + 5));
    setHappiness(happiness => Math.min(100, happiness + 1));
  }

  const play = () => {
    setHunger(hunger => Math.min(100, hunger + 5));
    setHealth(health => Math.max(0, health - 1));
    setHappiness(happiness => Math.min(100, happiness + 10));
  }

  const sleep = () => {
    setHunger(hunger => Math.min(100, hunger + 5));
    setHealth(health => Math.min(100, health + 20));
    setHappiness(happiness => Math.min(100, happiness + 10));
  }

  const getBarColor = value => {
    if (value > 80) {
      return 'green';
    } else if (value > 60) {
      return 'limegreen';
    } else if (value > 40) {
      return 'yellow';
    } else if (value > 20) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  const getBarColorHunger = value => {
    if (value > 80) {
      return 'red';
    } else if (value > 60) {
      return 'orange';
    } else if (value > 40) {
      return 'yellow';
    } else if (value > 20) {
      return 'limegreen';
    } else {
      return 'green';
    }
  };

  return (

    <div>
      <h2 className='m-2 text-white'>Tamagotchi</h2>
      <div className='caja'>
        <h3>{name}</h3>
        <p>{age} Years and {months} Months</p>
        <p>Hunger
          <div className='progress-bar' style={{
            width: `${hunger}%`,
            backgroundColor: getBarColorHunger(hunger),
          }}>
            <span className='num'>{hunger}</span>
          </div></p>
        <p>Happiness
          <div className='progress-bar' style={{
            width: `${happiness}%`,
            backgroundColor: getBarColor(happiness),
          }}>
            <span className='num'>{happiness}</span>
          </div></p>
        <p>Health
          <div className='progress-bar' style={{
            width: `${health}%`,
            backgroundColor: getBarColor(health),
          }}>
            <span className='num'>{health}</span>
          </div></p>
        {/* {health === 0 || happiness === 0 || hunger === 100 ? (<p>Your tamagotchi died</p>
      ) : ( */}
        <>
          <button className='rounded' id="buttonFeed" onClick={feed}>Feed</button>
          <button className='rounded' id="buttonPlay" onClick={play}>Play</button>
          <button className='rounded' id="buttonSleep" onClick={sleep}>Sleep</button>
          <p className='dieMessage' id="messageDie"></p>
          {isDead && (
            <TamagotchiForm
              age={age}
              hunger={hunger}
              happiness={happiness}
              health={health}
              months={months} />
          )}
          {/*<button onClick={handlePause}>{paused ? 'Resume' : 'Pause'}</button>*/}
        </>

      </div>
    </div>
  );
}

export default Tamagotchi;

