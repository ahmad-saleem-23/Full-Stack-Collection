import { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fetchGames } from '../actions/games'
import AddGame from './AddGame'

export default function GamesList() {
  const games = useAppSelector((state) => state.gamesReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGames())
      
  }, [])

  return (
    <div>
      <div>
        <h1>My Game Library</h1>
        <ul>
          {games.data.map((game) => (
            <li key={game.id}>
              <h2>{game.title}</h2>
              <p>Genre: {game.genre}</p>
              <p>Score: {game.score}</p>
            </li>
          ))}
        </ul>
      </div>
      <AddGame/>
      </div>
  )
}
