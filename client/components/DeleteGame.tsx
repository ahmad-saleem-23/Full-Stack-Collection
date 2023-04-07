import { useEffect, useState } from 'react'

import { useAppDispatch } from '../hooks/hooks'
import { fetchGames, fetchDeleteGames } from '../actions/games'

interface Props {
  id: number
}

export default function DeletGame({ id }: Props) {
  const dispatch = useAppDispatch()

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
