import request from 'superagent'
import type {game, Games} from '../../models/games'

const url ='/v1/games'


export function getGames (){
return request.get(url).then((response)=>{
  console.log(response.body)
 return response.body
})

}