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

  return (
    <div>
      Hello
    </div>
  )
};

export default App;
