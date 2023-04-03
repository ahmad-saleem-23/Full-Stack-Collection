import { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fetchGames, fetchAddGames } from '../actions/games'

export default function AddGame() {
  const [title, setTitle]= useState('')
  const [genre, setGenre]= useState('')
  const [score, setScore]= useState(0)
  // const games = useAppSelector((state) => state.gamesReducer)
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   const newGame ={title,genre, score}
  //   dispatch(fetchAddGames(newGame))
      
  // }, [])


  function onSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const newGame ={title,genre, score}
    console.log(newGame)
    dispatch(fetchAddGames(newGame)).then(() => {
      dispatch(fetchGames()) }).catch((err)=>console.log(err))
      setTitle('')
      setGenre('')
      setScore(0)
 
    }

  

  return (
   
      <div>
       <form onSubmit={onSubmit}>
       <label htmlFor="text">title </label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /><br/>
      <label htmlFor="text">genre </label>
  <input
        type="text"
        name="genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      /><br/>
      <label htmlFor="text">score </label>
        <input
        type="number"
        name="score"
        value={score}
        onChange={(e) => setScore(Number(e.target.value))}
      />


<button type='submit'>Submit game</button>
      
      {/* <input type="submit" /> */}
    </form>
      </div>
  
  )
}
