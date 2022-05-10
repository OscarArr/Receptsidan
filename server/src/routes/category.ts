import express from 'express'
import { getCategories, getRecipesByCategory, getRecipesByCategoryAndQuery } from '../db/category'

const router = express.Router()



router.get("/", async (req, res) => {
  const query = req.query
  if(Object.keys(query).length > 0){
  } else {
    const categories = await getCategories() 
    res.json(categories)
  }
})

// router.get("/:category", async (req, res) => {
//   if(Object.keys(req.params).includes("category")){
//     const recipes = await getRecipesByCategory(req.params.category)
//     res.json(recipes)
//   }
// })

router.get("/:category/recipes", async (req, res) => {
  const query = req.query
  if(Object.keys(req.query).length > 0){
    if(Object.keys(req.query).includes("search")){
      console.log(query)
      const recipes = await getRecipesByCategoryAndQuery(req.params.category, query.search)
      res.json(recipes)
    }
  } else if(Object.keys(req.params).includes("category")){
    const recipes = await getRecipesByCategory(req.params.category)
    res.json(recipes)
  }
})

// router.get("/:category/:searchQuery", async (req, res) => {
//   if(Object.keys(req.params).includes("category")){
//     const recipes = await getRecipesByCategoryAndQuery(req.params.category, req.params.searchQuery)
//     res.json(recipes)
//   }
// })


export default router