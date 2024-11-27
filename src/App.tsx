import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Game from './Components/Game'
function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
