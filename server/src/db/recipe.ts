import RecipeModel from './models/recipeModel'

export const getRecipes = async () => {
  return await RecipeModel.find()
}

export const getRecipesByQuery = async (query: any) => {
  return await RecipeModel.find(
    {"title" : {'$regex' : query, '$options': "i" }})
}

export const getRecipesById = async (id: string) => {
  return await RecipeModel.find(
    {_id : id}
  )
}