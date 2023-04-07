import type { ThunkAction } from '../store'
import type { game, Games, newGame, updatedGame } from '../../models/games'
import { addAGame, deleteAGame, getGames, updateAGame } from '../apis/game'

export const REQUEST_GAMES = 'REQUEST_GAMES'
export const RECEIVE_GAMES = 'RECEIVE_GAMES'
export const FAILURE_GAMES = 'FAILURE_GAMES'

export type GameAction =
  | { type: typeof REQUEST_GAMES }
  | { type: typeof RECEIVE_GAMES; payload: game[] }
  | { type: typeof FAILURE_GAMES; payload: string }

export function requestGames(): GameAction {
  return { type: REQUEST_GAMES }
}

export function receiveGames(games: Games): GameAction {
  return {
    type: RECEIVE_GAMES,
    payload: games.map((game) => {
      return game
    }),
  }
}

export function failureGames(errorMessage: string): GameAction {
  return {
    type: FAILURE_GAMES,
    payload: errorMessage,
  }
}

export function fetchGames(): ThunkAction {
  return (dispatch) => {
    dispatch(requestGames())
    return getGames()
      .then((res) => {
        dispatch(receiveGames(res))
      })
      .catch((err) => {
        if (err instanceof Error) {
          dispatch(failureGames(err.message))
        } else {
          dispatch(failureGames('An unknown error occurred'))
        }
      })
  }
}

export function fetchAddGames(game: newGame): ThunkAction {
  return async (dispatch) => {
    return addAGame(game)
      .then((game) => {
        dispatch(receiveGames([game]))
      })
      .catch((err) => {
        if (err instanceof Error) {
          dispatch(failureGames(err.message))
        } else {
          dispatch(failureGames('An unknown error occurred'))
        }
      })
  }
}

export function fetchDeleteGames(id: number): ThunkAction {
  return async (dispatch) => {
    return deleteAGame(id)
      .then((game) => {
        dispatch(receiveGames([game]))
      })
      .catch((err) => {
        if (err instanceof Error) {
          dispatch(failureGames(err.message))
        } else {
          dispatch(failureGames('An unknown error occurred'))
        }
      })
  }
}

export function fetchUpdateGame(id: number, game: updatedGame): ThunkAction {
  return async (dispatch) => {
    return updateAGame(id, game)
      .then((game) => {
        dispatch(receiveGames([game]))
      })
      .catch((err) => {
        if (err instanceof Error) {
          dispatch(failureGames(err.message))
        } else {
          dispatch(failureGames('An unknown error occurred'))
        }
      })
  }
}
