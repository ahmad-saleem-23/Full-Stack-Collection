import {
  GameAction,
  RECEIVE_GAMES,
  FAILURE_GAMES,
  REQUEST_GAMES,
} from '../actions/games'
import type { game } from '../../models/games'

const initialState: GameState = {
  data: [],
  isLoading: false,
  error: null,
}

type GameState = {
  data: game[]
  error: string | null
  isLoading: boolean
}

function games(state = initialState, action: GameAction): GameState {
  switch (action.type) {
    case RECEIVE_GAMES:
      return {
        data: action.payload,
        error: null,

        isLoading: false,
      }
    case REQUEST_GAMES:
      return {
        error: null,
        data: [],
        isLoading: true,
      }
    case FAILURE_GAMES:
      return {
        error: action.payload,
        data: [],
        isLoading: false,
      }
    default:
      return state
  }
}

export default games
