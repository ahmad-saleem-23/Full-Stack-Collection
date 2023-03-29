import express from 'express'
import {getAllGames} from '../db/games'


const router= express.Router()


router.get('/',async(req, res)=>{
try{
  const games= await getAllGames()
  res.json(games)
}catch (error) {
  console.log(error)
  res.status(500).json({
    error: 'There was an error trying to get the games :(',
  })}
})

export default router