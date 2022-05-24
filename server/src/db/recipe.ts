import RecipeModel from './models/recipeModel'

export const getRecipes = async () => {
  return await RecipeModel.find()
}

export const getRecipesByQuery = async (query: any) => {
  return await RecipeModel.find(
    {"title" : {'$regex' : query, '$options': "i" }})
}

export const getRecipeById = async (id: string) => {
  return await RecipeModel.find(
    {"_id" : id}
  )
}

export const postRecipeRating = async (id: string, rating: number) => {
  const recipe = await RecipeModel.findOneAndUpdate(
    {_id: id},
    {$push: {ratings: rating} }
    )
      // if (!recipe){
      //     console.log("error")
      //     throw '404'
      // }else {
      //     recipe.ratings.push(rating)
      //     await recipe.save()
      //     console.log("Recipe rating saved")
      //     return rating;
      // }
}