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
  

  return (
    <div>
      Hello
    </div>
  )
};

export default App;
