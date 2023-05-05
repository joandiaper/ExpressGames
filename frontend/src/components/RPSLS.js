import { useState, useEffect } from 'react';
import "../css/RPSLS.css";
import PPTLSForm from './PPTLSForm';

const options = [
  { id: 0, name: "Piedra", emoji: "💎", beats: [2, 3] },
  { id: 1, name: "Papel", emoji: "📄", beats: [0, 4] },
  { id: 2, name: "Tijera", emoji: "✂️", beats: [1, 3] },
  { id: 3, name: "Lagarto", emoji: "🦎", beats: [1, 4] },
  { id: 4, name: "Spock", emoji: "🖖", beats: [0, 2] },
];

const getResult = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 0;
  }

  if (options[userChoice].beats.includes(computerChoice)) {
    return 1;
  }

  return 2;
};

const OptionButton = ({ option, handlePlay, disabled }) => (
  <button
    className="px-4 py-2 m-2 text-xl font-bold text-white bg-yellow-500 rounded-full hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
    disabled={disabled}
    onClick={() => handlePlay(option.id)}
    title={option.name}
  >
    {option.emoji}
  </button>
);

const useChoices = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [userMessage, setUserMessage] = useState(null);
  const [computerMessage, setComputerMessage] = useState(null);
  const [result, setResult] = useState(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (userChoice !== null) {
      setUserMessage(
        `Has elegido ${options[userChoice]?.emoji} - ${options[userChoice]?.name}`
      );
    }
  }, [userChoice]);

  useEffect(() => {
    if (computerChoice !== null) {
      setComputerMessage(
        `El ordenador ha elegido ${options[computerChoice]?.emoji} - ${options[computerChoice]?.name}`
      );
    }
  }, [computerChoice]);

  const handlePlay = (choice) => {
    setUserChoice(choice);
    setDisabled(true);

    const randomChoice = Math.floor(Math.random() * 5);

    setTimeout(() => {
      setComputerChoice(randomChoice);
    }, 500);

    setTimeout(() => {
      setResult(getResult(choice, randomChoice));
    }, 1000);

    clearTimeout();
  };

  const reset = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setUserMessage(null);
    setComputerMessage(null);
    setResult(null);
    setDisabled(false);
  };

  return {
    userChoice,
    computerChoice,
    userMessage,
    computerMessage,
    result,
    disabled,
    handlePlay,
    reset,
  };
};

const RPSLS = () => {
  const {
    userChoice,
    computerChoice,
    userMessage,
    computerMessage,
    result,
    disabled,
    handlePlay,
    reset,
  } = useChoices();

  return (
    <div>
      <h2 className='m-2 text-white'>Rock Paper Scissors Lizard Spock</h2>
      <div className='flex items-center justify-center h-screen ng-gray-800 divStyle'>

        <div className='rounded-lg p-4 bg-gray-500'>
          <h1 className='text-3x1 mb-4 text-center font-bold'>Let's play!</h1>
          <div className='max-w-md mx-auto'>
            {options.map((option) => (
              <OptionButton
                key={option.id}
                option={option}
                handlePlay={handlePlay}
                disabled={disabled}
              />
            ))}
            {userChoice !== null && (
              <p className='text-xl mt-4'>{userMessage}</p>
            )}
            {computerChoice !== null && (
              <p className='text-xl mt-4'>{computerMessage}</p>
            )}
            {result !== null && (
              <div className='mt-8 text-center'>
                {result === 0 && <p className='text-xl mt-4'>➖ Draw</p>}
                {result === 1 && (
                  <p className='text-xl mt-4'>✔️ You win with {options[userChoice]?.name} against {options[computerChoice]?.name}</p>
                )}
                {result === 2 && (
                  <p className='text-xl mt-4'>❌ You lose with {options[userChoice]?.name}
                    {" "}against{" "} {options[computerChoice]?.name}</p>
                )}
                
                <PPTLSForm result={result}/>
                <button
                  className='bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 mt-4 border-b-4 border-green-700 rounded'
                  onClick={reset}>
                  Play again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
                  
    </div>
  );

};

export default RPSLS;
