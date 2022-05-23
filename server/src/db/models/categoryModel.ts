import { Schema, model } from 'mongoose'


interface Category {
  name: string,
  count: number
  // ,
  // imageUrl: string,
  // timeInMins: number,
  // ratings: [number],
  // category: [string],
  // ingredients: any,
  // instructions: any,
  // comments: any
}


const schema = new Schema<Category>({
  name: { type: String, required: true },
  count: { type: Number, required: true }
  // ,
  // imageUrl: { type: String },
  // timeInMins: { type: Number },
  // ratings: { type: [Number] },
  // category: { type: [String] },
  // ingredients: { type: Array },
  // instructions: { type: Array },
  // comments: { type: Array } 
})

const CategoryModel = model<Category>('Category', schema)

export default CategoryModel