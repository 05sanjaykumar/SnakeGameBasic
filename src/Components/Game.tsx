import React, { useState, useEffect } from 'react';

const ROWS = 20;
const COLS = 20;

const App: React.FC = () => {
  const [snake,setSnake] = useState<{row:number; col:number}>
  const [direction, setDirection] = useState('RIGHT');
  const [food, setFood] = useState<{ row: number; col: number }>({ row: 5, col: 5 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const generateFood = ()=>({
    row:Math.floor(Math.random()*ROWS),
    col:Math.floor(Math.random()*COLS),
  })

  useEffect(() => {
    const Keyboard = (e:KeyboardEvent)=>{
      if(e.key ==="ArrowUp" && direction!=="Down")
      {
        setDirection('Up')
      }
      else if(e.key ==="ArrowDown" && direction!=="Up")
        {
          setDirection('Down')
        }
      else if(e.key ==="ArrowLeft" && direction!=="Right")
        {
          setDirection('Left')
        }
      else if(e.key ==="ArrowRight" && direction!=="Left")
        {
          setDirection('Right')
        }
    }
    document.addEventListener('keydown',Keyboard)
    return () => document.removeEventListener('keydown', Keyboard);
  }, [direction])
  

  const resetGame = () => {
    setSnake([{ row: 10, col: 10 }]);
    setDirection('RIGHT');
    setFood(generateFood());
    setGameOver(false);
    setScore(0);
  };


  const moveSnake = ()=>{
    const head = {...snake[0]};
    const newSnake = [...snake];

    if (direction === 'UP') head.row -= 1;
    else if (direction === 'DOWN') head.row += 1;
    else if (direction === 'LEFT') head.col -= 1;
    else if (direction === 'RIGHT') head.col += 1;

    head.row = (head.row + ROWS) % ROWS;
    head.col = (head.col + COLS) % COLS;

    if (checkCollision(newSnake, head)) {
      setGameOver(true);
      return;
    }

    
  }

  


  function checkCollision(snake:{row:number,col:number}[], head:{row:number,col:number})
  {
    return snake.some((part)=>part.row === head.row && part.col === head.col)
  }
  return (
    <div>
      Hello
    </div>
  )
};

export default App;
