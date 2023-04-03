import { join } from 'node:path'
import express from 'express'
import path from 'path'
import games from './routes/games'
// import cors from 'cors'


const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
// server.use(cors({
//   origin: 'http://localhost:3000' // Replace with the origin where your React application is hosted
// }));
// server.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with the origin where your React application is hosted
//   next();
// });

server.use('/v1/games', games)
server.use('/v1/*', (req, res) => res.sendStatus(404))

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, './public/index.html'))
})


export default server
