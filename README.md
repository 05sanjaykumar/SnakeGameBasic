```markdown
# Snake Game 🐍

Welcome to the **Snake Game**! A fun and interactive game built using React.js, where you guide a snake to eat food, grow longer, and avoid collisions.

## 🚀 Features

- **Responsive Design**: Works well across different screen sizes.
- **Adjustable Speed**: Play at different speeds, from "Tortoise Speed" to "Tachyon Speed."
- **High Score Tracking**: Displays the highest score achieved on the home page.
- **Game Over Screen**: Clear indication when the game ends with the option to restart.
- **Smooth Controls**: Use arrow keys to control the snake.

## 🖥️ Demo

Check out the live version of the game [here](https://05sanjaykumar.github.io/SnakeGameBasic).

## 📂 Folder Structure

```
SnakeGame/
│
├── public/             # Public files and assets
├── src/                # Source code
│   ├── Components/     # React components
│   │   ├── Home.tsx    # Home screen component
│   │   ├── Game.tsx    # Main game logic
│   ├── App.tsx         # Main application entry
│   ├── index.tsx       # Entry point for React DOM
│   ├── styles.css      # Global styles
│
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── README.md           # Project documentation
└── .gitignore          # Git ignored files
```

## 🛠️ Installation & Setup

To run the game locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/05sanjaykumar/SnakeGameBasic.git
   cd SnakeGameBasic
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the game in your browser:
   ```
   http://localhost:5173
   ```

## 🌀 Deployment

This project is deployed using **GitHub Pages**. To deploy your own version:

1. Update the `homepage` field in `package.json`:
   ```json
   "homepage": "https://<your-username>.github.io/<repository-name>"
   ```

2. Build and deploy the project:
   ```bash
   npm run deploy
   ```

## 🕹️ How to Play

1. **Start the Game**: Click the **"Start Game"** button on the home screen.
2. **Control the Snake**: Use arrow keys:
   - `ArrowUp` to move up
   - `ArrowDown` to move down
   - `ArrowLeft` to move left
   - `ArrowRight` to move right
3. **Objective**:
   - Eat the red food squares to grow longer.
   - Avoid colliding with your own body.
4. **Game Over**:
   - When you collide with your body, the game ends, and you can restart.

## 🧑‍💻 Technologies Used

- **React.js**: Front-end framework
- **TypeScript**: For static typing
- **Vite**: Lightning-fast development and build tool
- **CSS**: Custom styles for game UI

## 🌟 Features in Development

- **Persistent High Scores**: Save high scores across sessions.
- **Sound Effects**: Add audio feedback for eating and collisions.
- **Obstacle Mode**: Introduce obstacles for an extra challenge.

## 🛑 Known Issues

1. **Layout Issues**: On small screen sizes, some buttons may not be fully visible.
2. **Higher Rerendering Persistence**: Still can be optimised.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or create pull requests. Here's how to contribute:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push the branch and open a pull request:
   ```bash
   git push origin feature-name
   ```

## 📜 License

This project is licensed under the [MIT License](LICENSE).

## 👨‍💻 Author

Created by [Sanjay Kumar](https://github.com/05sanjaykumar). If you like this project, feel free to ⭐ the repo and share it with others!
```

---
