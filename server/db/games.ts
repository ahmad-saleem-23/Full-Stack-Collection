import connection from './connection'


export function getAllGames(db = connection) {
  return db('games').select()
}
