import express from 'express'
import { getRecipesOfCategory } from '../db/category'

const router = express.Router()



router.get("/", async (req, res) => {
  // if(Object.keys(query).length > 0){
  //   return "najnajnaj"
  // } else {
    const recipesByCategory = await getRecipesOfCategory() 
    res.json(recipesByCategory)
  // }
})

export default router