import { Schema, model } from 'mongoose'

interface ingredients {

}

interface Recipe {
  title: string,
  description: string,
  imageUrl: string,
  timeInMins: number,
  ratings: [number],
  category: [string],
  ingredients: any,
  instructions: any,
  comments: any
}


const schema = new Schema<Recipe>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
  timeInMins: { type: Number },
  ratings: { type: [Number] },
  category: { type: [String] },
  ingredients: { type: Array },
  instructions: { type: Array },
  comments: { type: Array } 
})

const RecipeModel = model<Recipe>('Recipe', schema)

export default RecipeModel