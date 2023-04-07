import express from 'express'
import {
  addGames,
  deleteGame,
  getAllGames,
  getGameById,
  updateGames,
} from '../db/games'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const games = await getAllGames()
    res.json(games)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: 'There was an error trying to get the games :(',
    })
  }
})

router.post('/add', async (req, res) => {
  try {
    const { title, genre, score } = req.body
    const [newGames] = await addGames(title, genre, score)
    res.json(newGames)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: 'There was an error trying to get the games :(',
    })
  }
})

router.delete('/:id/delete', async (req, res) => {
  try {
    // const { id } = req.body
    const id = Number(req.params.id)

    await deleteGame(id)
    res.redirect('/')
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: 'There was an error trying to get the games :(',
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const game = await getGameById(id)
    res.json(game)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: 'There was an error trying to get the games :(',
    })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const { title, genre, score } = req.body
    const updatedGame = await updateGames(id, title, genre, score)
    res.json(updatedGame)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: 'There was an error trying to get the games :(',
    })
  }
})

export default router
