export type Games = game[]

export interface game {
  id: number
  title: string
  genre: string
  score: number
}

export interface newGame {
  id?: number
  title: string
  genre: string
  score: number
}
