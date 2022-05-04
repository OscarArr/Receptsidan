import express from 'express'
import { getRecipes, getRecipesByQuery } from '../db/recipe'

const router = express.Router()

router.get("/", async (req, res) => {
  const query = req.query
  if(Object.keys(query).length > 0){
    if(Object.keys(query).includes("search")){
      const recipes = await getRecipesByQuery(query.search)
      res.json(recipes)
    }
  } else {
    const recipes = await getRecipes() 
    res.json(recipes)
  }
})

router.get("/id", async (req, res) => {
  
})

export default router