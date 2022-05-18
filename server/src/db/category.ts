import RecipeModel from './models/recipeModel'

export const getCategories = async () => {
  // return await RecipeModel.find().distinct('category')
  const categories = await RecipeModel.aggregate([
    { $match: {} },
    { $unwind: '$category' },
    { $group: { _id: '$category',  count: { $sum: 1 } } },
    { $sort: { count: -1 } }
  ]);
  for (let i = 0; i < categories.length; i++) {
    categories[i].name = categories[i]._id;
    delete categories[i]._id;
  }
  return categories
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


