import { Link, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import AddGame from './AddGame'
import Home from './Home'

function App() {
  const [isAddGameVisible, setIsAddGameVisible] = useState(false)

  const handleAddGameClick = () => {
    if (!isAddGameVisible) {
      setIsAddGameVisible(true)
    } else {
      setIsAddGameVisible(false)
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div className="main-heading">
        <h1>My Game Library</h1>

        {isAddGameVisible ? (
          <>
            <button className="add-game-button " onClick={handleAddGameClick}>
              Cancel
            </button>
            <div className="add-game-form">
              <AddGame handleAddGameClick={handleAddGameClick} />
            </div>
          </>
        ) : (
          <button className="add-game-button " onClick={handleAddGameClick}>
            Add Game
          </button>
        )}
      </div>
    </>
  )
}

export default App
