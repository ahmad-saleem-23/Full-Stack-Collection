import { useState } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fetchGames, fetchUpdateGame } from '../actions/games'
interface Props {
  id: number,
  name: string,
  cata: string,
  rating: number,
  onSubmit: () => void
}
export default function UpdateGame({ id,name,cata,rating, onSubmit }: Props) {
  
  const dispatch = useAppDispatch()

  const [title, setTitle] = useState(name)
  const [genre, setGenre] = useState(cata)
  const [score, setScore] = useState(rating)

  function handelSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const updateGame = { title, genre, score }
    console.log(updateGame)
    dispatch(fetchUpdateGame(id, updateGame))
      .then(() => {
        dispatch(fetchGames())
        onSubmit() 
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label htmlFor="Update-title">title </label>
        <input
          type="text"
          id='Update-title'
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="Update-genre">genre </label>
        <input
          type="text"
          id='Update-genre'
          name="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <br />
        <label htmlFor="Update-score">score </label>
        <input
          type="number"
          id='Update-score'
          name="score"
          value={score}
          onChange={(e) => setScore(Number(e.target.value))}
        />

        <button type="submit">Submit updates</button>

        {/* <input type="submit" /> */}
      </form>
    </div>
  )
}
