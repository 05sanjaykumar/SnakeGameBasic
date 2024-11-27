import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const changePath = () => {
    navigate('/game'); 
  };

  return (
    <div className='homecontainer'>
      <div className='home-title'>
        <button onClick={changePath}>Enter the game</button>
      </div>
    </div>
  );
};

export default Home;
