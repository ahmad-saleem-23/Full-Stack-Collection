import type { ThunkAction } from '../store'
import type { game, Games } from '../../models/games'

export const REQUEST_GAMES = 'REQUEST_GAMES'
export const RECEIVE_GAMES = 'RECEIVE_GAMES'
export const FAILURE_GAMES = 'FAILURE_GAMES'

export type GameAction =
  | { type: typeof REQUEST_GAMES }
  | { type: typeof RECEIVE_GAMES; payload: game[] }
  | { type: typeof FAILURE_GAMES; payload: string }

export function requestGames():GameAction {
  return { type: REQUEST_GAMES }
}

export function receiveGames(games: Games):GameAction {
  return { type: RECEIVE_GAMES, payload: games.map((game) => {return game}) }
}

export function failureGames(errorMessage: string):GameAction{
  return {
    type: FAILURE_GAMES,
    payload: errorMessage,
  }
}