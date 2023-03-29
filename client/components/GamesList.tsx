import { useState } from 'react'

import {useAppSelector } from '../hooks/hooks'

export default function GamesList() {
  const games = useAppSelector((state) => state.gamesReducer)

  return (
    <>
      <div>
        <h1>My Game Library</h1>
        <ul>
          {games.data.map(game => (
            <li key={game.id}>
              <h2>{game.title}</h2>
              <p>Genre: {game.genre}</p>
              <p>Score: {game.score}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
