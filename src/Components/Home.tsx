import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [highScore, setHighScore] = useState<number>(0); 

  useEffect(() => {
    const highScore = localStorage.getItem('highScore')
    if(highScore)
    {
      setHighScore(parseInt(highScore, 10));
    }
  }, [])
  

  const changePath = () => {
    navigate('/game'); 
  };

  return (
    <div className='flex justify-center  h-screen flex-col bg-[#04111e] items-center overflow-hidden'>
      <div className="w-[800px] bg-gray-700 shadow-lg rounded-lg min-h-[600px] flex flex-col p-8 justify-center align-middle">
        {" "}
        <header className="flex justify-between items-center w-full mb-6">
          <h1 className="font-title text-primary-950 text-2xl text-white">Snake Game 🐍 By Sanjay Kumar</h1>
          <span className="text-primary-950 font-medium text-white">High Score: {highScore}</span>
        </header>
        <div className="flex flex-col items-center justify-center w-full flex-grow">
          <p className="text-lg mb-4 text-white">
            Welcome to my game! Let's Play. Just start by clicking the button
          </p>
          <button onClick={changePath} className="bg-purple-500 text-primary-50  py-2 px-6 rounded-md cursor-pointer font-bold text-white hover:bg-purple-600 transition duration-300">
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
