import connection from './connection'
import type { newGame, updatedGame } from '../../models/games'

export function getAllGames(db = connection) {
  return db('games').select()
}

export function addGames(
  title: string,
  genre: string,
  score: number,
  db = connection
): Promise<newGame[]> {
  return db('games').insert({ title, genre, score })
}

export function deleteGame(
  id: number,
  db = connection
): Promise<updatedGame[]> {
  return db('games').where('id', id).delete()
}

export function updateGames(
  id: number,
  title: string,
  genre: string,
  score: number,
  db = connection
) {
  return db('games').where('id', id).update({ title, genre, score })
}

export function getGameById(id: number, db = connection) {
  return db('games').where('id', id).select()
}
