import { join } from 'node:path'
import express from 'express'
import path from 'path'
import games from './routes/games'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/v1/games', games)
server.use('/v1/*', (req, res) => res.sendStatus(404))

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, './public/index.html'))
})


export default server
