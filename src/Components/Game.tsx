import React, { useState, useEffect } from 'react';

const ROWS = 20; // Number of rows in the grid
const COLS = 20; // Number of columns in the grid

const App: React.FC = () => {
  const [snake, setSnake] = useState<{ row: number; col: number }[]>([{ row: 10, col: 10 }]); // Snake's position
  const [direction, setDirection] = useState('RIGHT'); // Direction of movement
  const [food, setFood] = useState<{ row: number; col: number }>({ row: 5, col: 5 }); // Food's position
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // Generate a random food position
  const generateFood = (): { row: number; col: number } => ({
    row: Math.floor(Math.random() * ROWS),
    col: Math.floor(Math.random() * COLS),
  });

  // Move the snake
  const moveSnake = () => {
    const newSnake = [...snake];
    const head = { ...newSnake[0] }; // Get the current head of the snake
  
    // Update the head's position based on the direction
    if (direction === 'UP') head.row -= 1;
    else if (direction === 'DOWN') head.row += 1;
    else if (direction === 'LEFT') head.col -= 1;
    else if (direction === 'RIGHT') head.col += 1;
  
    // Wall logic: Wrap around when the snake goes out of bounds
    head.row = (head.row + ROWS) % ROWS;
    head.col = (head.col + COLS) % COLS;
  
    // Check for collisions (with itself)
    if (checkCollision(newSnake, head)) {
      setGameOver(true);
      return;
    }
  
    newSnake.unshift(head); // Add the new head to the snake
  
    // Check if the snake eats the food
    if (head.row === food.row && head.col === food.col) {
      setFood(generateFood()); // Generate new food
      setScore(score + 10); // Increase score
    } else {
      newSnake.pop(); // Remove the tail (snake doesn't grow unless it eats)
    }
  
    setSnake(newSnake); // Update the snake's position
  };
  // Check if the snake collides with itself
  const checkCollision = (snake: { row: number; col: number }[], head: { row: number; col: number }): boolean => {
    return snake.some(segment => segment.row === head.row && segment.col === head.col);
  };

  // Reset the game
  const resetGame = () => {
    setSnake([{ row: 10, col: 10 }]);
    setDirection('RIGHT');
    setFood(generateFood());
    setGameOver(false);
    setScore(0);
  };

  // Keypress handler for direction control
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

  // Move the snake at regular intervals
  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(() => moveSnake(), 200); // Snake moves every 200ms
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
        if (snake.some(segment => segment.row === row && segment.col === col)) {
          cellClass = 'bg-green-500'; // Snake cell
        } else if (food.row === row && food.col === col) {
          cellClass = 'bg-red-500'; // Food cell
        }
        cells.push(
          <div key={`${row}-${col}`} className={`w-6 h-6 border border-gray-300 ${cellClass}`}></div>
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
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Snake Game</h1>
      <div className="flex flex-col">{renderBoard()}</div>
      <div className="text-lg">Score: {score}</div>
      {gameOver && (
        <div className="flex flex-col items-center mt-4">
          <h2 className="text-xl font-bold text-red-500">Game Over</h2>
          <button
            onClick={resetGame}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
