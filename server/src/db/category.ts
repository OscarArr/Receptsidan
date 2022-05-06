import RecipeModel from './models/recipeModel'

export const getCategories = async () => {
  return await RecipeModel.find().distinct('category')
}

export const getRecipesByCategory = async (category: any) => {
  return await RecipeModel.find(
    {"category" : category}
  )
}

export const getRecipesByCategoryAndQuery = async (category: any, searchQuery: any) => {
  return await RecipeModel.find(
    {"category": category, "title" : {'$regex' : searchQuery, '$options': "i" }})
}


