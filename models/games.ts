export type Games = game[]

export interface game {
  id: number
  title: string
  genre: string
  score: number
}

// export interface newGame {
//   id?: number
//   title?: string
//   genre?: string
//   score?: number
// }
export type newGame = Partial<Omit<game, 'id'>>

export interface updatedGame {
  id?: number
  title?: string
  genre?: string
  score?: number
}
