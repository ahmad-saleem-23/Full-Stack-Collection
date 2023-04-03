import { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fetchGames, fetchAddGames, fetchDeleteGames } from '../actions/games'

interface Props {id:number}

export default function DeletGame({id}:Props) {
  const [title, setTitle] = useState('')

  // const games = useAppSelector((state) => state.gamesReducer)
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   const newGame ={title,genre, score}
  //   dispatch(fetchAddGames(newGame))

  // }, [])

  function onClick() {
   
    console.log()
    dispatch(fetchDeleteGames(id))
      .then(() => {
        dispatch(fetchGames())
      })
      .catch((err) => console.log(err))
   
   
  }

  return (
    <button type="button" onClick={onClick}>
      delete game
    </button>
  )
}
