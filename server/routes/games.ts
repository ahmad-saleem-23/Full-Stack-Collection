import express from 'express'
import {addGames, deleteGame, getAllGames} from '../db/games'


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

router.post('/add',async(req, res)=>{
  try{

    const { title,
      genre,
      score,}= req.body
    const newGames= await addGames(title,
      genre,
      score,)
    res.json(newGames)
  }catch (error) {
    console.log(error)
    res.status(500).json({
      error: 'There was an error trying to get the games :(',
    })}
  })


  router.post('/delete',async(req, res)=>{
    try{
  
      const { id,}= req.body
     await deleteGame(id,)
      res.json()
    }catch (error) {
      console.log(error)
      res.status(500).json({
        error: 'There was an error trying to get the games :(',
      })}
    })

export default router