import request from 'superagent'
import type { game, newGame, updatedGame } from '../../models/games'

const url = '/v1/games'

export function getGames() {
  return request.get(url).then((response) => {
    console.log(response.body)
    return response.body
  })
}

export function getGameID(id: number) {
  return request.get(url + `/${id}`).then((response) => {
    console.log(response.body)
    return response.body
  })
}

export function addAGame(game: newGame) {
  return request
    .post(url + '/add')
    .send(game)
    .then((response) => {
      return response.body as game
    })
    .catch((err) => {
      throw err
    })
}

export function deleteAGame(id: number) {
  return request
    .delete(url + `/${id}/delete`)
    .then((response) => {
      return response.body as game
    })
    .catch((err) => {
      throw err
    })
}

export function updateAGame(id: number, game: updatedGame) {
  return request
    .patch(url + `/${id}`)
    .send(game)
    .then((response) => {
      return response.body as game
    })
    .catch((err) => {
      throw err
    })
}
