import { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fetchGames, fetchAddGames } from '../actions/games'

export default function AddGame() {
  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('')
  const [score, setScore] = useState(0)
  // const games = useAppSelector((state) => state.gamesReducer)
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   const newGame ={title,genre, score}
  //   dispatch(fetchAddGames(newGame))

  // }, [])

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newGame = { title, genre, score }
    console.log(newGame)
    dispatch(fetchAddGames(newGame))
      .then(() => {
        dispatch(fetchGames())
      })
      .catch((err) => console.log(err))
    setTitle('')
    setGenre('')
    setScore(0)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="genre">genre </label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <br />
        <label htmlFor="score">score </label>
        <input
          type="number"
          id="score"
          name="score"
          value={score}
          onChange={(e) => setScore(Number(e.target.value))}
        />

        <button type="submit">Submit game</button>

        {/* <input type="submit" /> */}
      </form>
    </div>
  )
}
