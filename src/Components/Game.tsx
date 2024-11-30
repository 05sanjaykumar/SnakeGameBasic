import  { useState, useEffect } from 'react';

const ROWS = 20;
const COLS = 25;

const App = () => {
  const [snake, setSnake] = useState([{ row: 10, col: 10 }]);
  const [direction, setDirection] = useState('RIGHT');
  const [speed, setSpeed] = useState(200)
  const [food, setFood] = useState({ row: 5, col: 5 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const generateFood = () => ({
    row: Math.floor(Math.random() * ROWS),
    col: Math.floor(Math.random() * COLS),
  });

  useEffect(() => {
    const handleKeyPress = (e:KeyboardEvent) => {
      switch(e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [direction]);

  const resetGame = () => {
    setSnake([{ row: 10, col: 10 }]);
    setDirection('RIGHT');
    setFood(generateFood());
    setGameOver(false);
    setScore(0);
  };

  const checkCollision = (newHead:any, snakeBody:any) => {

    return snakeBody.some((segment:any, index:any) => 
      index !== 0 && segment.row === newHead.row && segment.col === newHead.col
    );
  };

  const moveSnake = () => {
    if (gameOver) return;

    const head = { ...snake[0] };
    const newSnake = [...snake];


    switch (direction) {
      case 'UP':
        head.row -= 1;
        break;
      case 'DOWN':
        head.row += 1;
        break;
      case 'LEFT':
        head.col -= 1;
        break;
      case 'RIGHT':
        head.col += 1;
        break;
    }


    head.row = (head.row + ROWS) % ROWS;
    head.col = (head.col + COLS) % COLS;


    if (checkCollision(head, snake)) {
      console.log('Collision detected!');
      setGameOver(true);
      return;
    }

    // Update snake position
    newSnake.unshift(head);

    // Check if food is eaten
    if (head.row === food.row && head.col === food.col) {
      setScore(prev => prev + 10);
      setFood(generateFood());
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  useEffect(() => {
    if (gameOver) {
      const savedHighScore = localStorage.getItem('highScore');
      if (!savedHighScore || score > parseInt(savedHighScore, 10)) {
        localStorage.setItem('highScore', score.toString());
      }
    }
  }, [gameOver]);

  useEffect(() => {
    if (!gameOver) {
      const gameInterval = setInterval(moveSnake, speed);
      return () => clearInterval(gameInterval);
    }
  }, [snake, direction, gameOver]); 

  const renderBoard = () => {
    const board = [];
    for (let row = 0; row < ROWS; row++) {
      const cells = [];
      for (let col = 0; col < COLS; col++) {
        const isSnake = snake.some(segment => segment.row === row && segment.col === col);
        const isFood = food.row === row && food.col === col;
        
        cells.push(
          <div
            key={`${row}-${col}`}
            className={`w-8 h-8 border border-gray-800 ${
              isSnake ? 'bg-green-500' : 
              isFood ? 'bg-red-500' : 'bg-gray-900'
            }`}
          />
        );
      }
      board.push(
        <div key={row} className="flex">
          {cells}
        </div>
      );
    }
    return board;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <h1 className="text-3xl font-bold text-white mb-4">Snake Game By Sanjay</h1>
      {!gameOver && (
        <div>
          <div className="border-1 border-gray-700 p-1 bg-gray-800">
            {renderBoard()}
          </div>
          <div className="text-xl text-white mt-4">Score: {score}</div>
          <div className=' text-white flex flex-row justify-between '>
            <button onClick={()=>setSpeed(500)}>Tortise speed</button>
            <button onClick={()=>setSpeed(200)}>Low speed</button>
            <button onClick={()=>setSpeed(100)}>Medium speed</button>
            <button onClick={()=>setSpeed(50)}>High speed</button>
            <button onClick={()=>setSpeed(20)} >Extreme speed</button>
            <button onClick={()=>setSpeed(5)} >Light speed</button>
            <button onClick={()=>setSpeed(0.01)} >Tachyon speed</button>
          </div>
        </div>
      )}
      {gameOver && (
        <div className="flex flex-col items-center mt-6 bg-gray-800 p-4 rounded-lg border-2 border-red-500">
          <h2 className="text-2xl font-bold text-red-500">Game Over!</h2>
          <p className="text-white mt-2">Final Score: {score}</p>
          <button
            onClick={resetGame}
            className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default App;