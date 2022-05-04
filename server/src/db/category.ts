import RecipeModel from './models/recipeModel'

export const getRecipesOfCategory = async () => {
  return await RecipeModel.find().distinct('category')
}

