import { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fetchGames } from '../actions/games'
import AddGame from './AddGame'
import DeletGame from './DeleteGame'
import UpdateGame from './UpdateGame'

export default function GamesList() {
  const games = useAppSelector((state) => state.gamesReducer)
  const dispatch = useAppDispatch()

  const [gameToUpdate, setGameToUpdate] = useState<number | null>(null)
  const [isUpdate, setIsUpdate] = useState(false)

  function handleUpdateCancel() {
    setGameToUpdate(null)
  }
  function handleUpdateClick(id: number) {
    setGameToUpdate(id)
    setIsUpdate(true)
  }

  useEffect(() => {
    dispatch(fetchGames())
  }, [dispatch])

  return (
    <div>
      <div>
    
        <ul>
          {games.data.map((game) => (
            <li key={game.id}>
              {game.id === gameToUpdate ? (
                <UpdateGame
                  id={game.id}
                  name={game.title}
                  cata={game.genre}
                  rating={game.score}
                  onSubmit={handleUpdateCancel}
                />
              ) : (
                <>
                  <h2>{game.title}</h2>
                  <p>Genre: {game.genre}</p>
                  <p>Score: {game.score}</p>
                  <button onClick={() => handleUpdateClick(game.id)}>
                    Update
                  </button>
                  <DeletGame id={game.id} />
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
      <AddGame />
    </div>
  )
}
