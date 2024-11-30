import React, { useState, useEffect } from 'react';

const ROWS = 20;
const COLS = 25;

const App: React.FC = () => {
  const [snake, setSnake] = useState<{ row: number; col: number }[]>([{ row: 10, col: 10 }]);
  const [direction, setDirection] = useState('RIGHT');
  const [food, setFood] = useState<{ row: number; col: number }>({ row: 5, col: 5 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // Generate food at random position
  const generateFood = () => ({
    row: Math.floor(Math.random() * ROWS),
    col: Math.floor(Math.random() * COLS),
  });

  // Handle key press for direction
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' && direction !== 'DOWN') setDirection('UP');
      else if (e.key === 'ArrowDown' && direction !== 'UP') setDirection('DOWN');
      else if (e.key === 'ArrowLeft' && direction !== 'RIGHT') setDirection('LEFT');
      else if (e.key === 'ArrowRight' && direction !== 'LEFT') setDirection('RIGHT');
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [direction]);

  // Reset game state
  const resetGame = () => {
    setSnake([{ row: 10, col: 10 }]);
    setDirection('RIGHT');
    setFood(generateFood());
    setGameOver(false);
    setScore(0);
  };

  // Move the snake and check for collisions
  const moveSnake = () => {
    const head = { ...snake[0] };
    const newSnake = [...snake];

    // Move the head in the current direction
    if (direction === 'UP') head.row -= 1;
    else if (direction === 'DOWN') head.row += 1;
    else if (direction === 'LEFT') head.col -= 1;
    else if (direction === 'RIGHT') head.col += 1;

    // Wrap around the board if the snake goes out of bounds
    head.row = (head.row + ROWS) % ROWS;
    head.col = (head.col + COLS) % COLS;

    console.log("Head Position:", head);

    // Check for collision with the body
    if (checkCollision(snake, head)) {
      console.log("Collision Detected! Game Over!");
      setGameOver(true);
      return;
    }

    // Add the new head to the snake
    newSnake.unshift(head);

    // Check if the snake eats food
    if (head.row === food.row && head.col === food.col) {
      setScore((prevScore) => prevScore + 10);
      setFood(generateFood());
    } else {
      newSnake.pop(); // Remove the tail
    }

    setSnake(newSnake);
  };

  // Check if the snake's head collides with its body
  const checkCollision = (
    snake: { row: number; col: number }[],
    head: { row: number; col: number }
  ) => {
    return snake.some((part, index) => index !== 0 && part.row === head.row && part.col === head.col);
  };

  // Update the snake's position at intervals
  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(moveSnake, 100);
      return () => clearInterval(interval);
    }
  }, [snake, direction, food, gameOver]);

  // Render the game board
  const renderBoard = () => {
    const board = [];
    for (let row = 0; row < ROWS; row++) {
      const cells = [];
      for (let col = 0; col < COLS; col++) {
        let cellClass = '';
        if (snake.some((part) => part.row === row && part.col === col)) {
          cellClass = 'bg-green-500';
        } else if (food.row === row && food.col === col) {
          cellClass = 'bg-red-500';
        }

        cells.push(
          <div
            key={`${row}-${col}`}
            className={`w-8 h-8 border border-gray-600 ${cellClass}`}
          ></div>
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
    <div className="flex flex-col items-center gap-4 p-4 bg-black min-h-screen">
      <h1 className="text-2xl font-bold text-white">Snake Game</h1>
      <div className="flex flex-col">{renderBoard()}</div>
      <div className="text-lg text-white mt-4">Score: {score}</div>
      {gameOver && (
        <div className="flex flex-col items-center mt-6 bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-bold text-red-500">Game Over</h2>
          <button
            onClick={resetGame}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
