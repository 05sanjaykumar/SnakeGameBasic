import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const changePath = () => {
    navigate('/game'); 
  };

  return (
    <div className='flex justify-center align-middle h-lvh flex-col bg-[#f8f9fa]'>
      <div className="w-[800px] bg-white shadow-lg rounded-lg min-h-[600px] flex flex-col items-center p-8 justify-center align-middle">
        {" "}
        <header className="flex justify-between items-center w-full mb-6">
          <h1 className="font-title text-primary-950 text-2xl">Game Page</h1>
          <span className="text-primary-950 font-medium">High Score: 1250</span>
        </header>
        <div className="flex flex-col items-center justify-center w-full flex-grow">
          <p className="text-neutral-950 text-lg mb-4">
            Welcome to the game! Aim for a new high score.
          </p>
          <button onClick={changePath} className="bg-pink-500 text-primary-50 font-medium py-2 px-6 rounded-md cursor-pointer font-bold">
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
