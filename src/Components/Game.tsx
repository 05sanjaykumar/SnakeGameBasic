import React, { useState, useEffect } from 'react';
import './Game.css';

const ROWS = 25;
const COLS = 25;
const INITIAL_SNAKE = [{ row: 12, col: 12 }];
const INITIAL_DIRECTION = 'RIGHT';

const generateFood = ()=>({
  ...{row: Math.floor(Math.random() * ROWS),
    col: Math.floor(Math.random() * COLS),}
})


const Game:React.FC = () => {

  const [snake, setSnake] =  useState(INITIAL_SNAKE);
  const [food, setFood] = useState(generateFood());
  const [gameOver, setGameOver] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [score, setScore] = useState(0);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);


  const resetGame = ()=>{
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(generateFood())
    setGameOver(false)
    setScore(0);
  }

  useEffect(() => {
    const keyboard = (e:KeyboardEvent)=>{
      switch(e.key)
      {
        case 'ArrowUp':
          setDirection('UP');
          break;
        case 'ArrowDown':
          setDirection('DOWN');
          break;
        case 'ArrowLeft':
          setDirection('LEFT');
          break;
        case 'ArrowRight':
          setDirection('RIGHT');
          break;
        default:
          break;
      }
    }
    document.addEventListener('keydown',keyboard);
    
  }, [])
  

  return (
    <div className='test'>

    </div>
  )
}

export default Game
