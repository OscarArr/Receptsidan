import express, { Request, Response, json } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import recipeRouter from './routes/recipe'
import categoryRouter from './routes/category'


const app = express()
const port = 4000;
dotenv.config()

const url = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@recipedb.xipac.mongodb.net/RecipeDB?retryWrites=true&w=majority`;

mongoose.connect(url)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
      console.error(`Error connecting to the database. n${err}`);
    })



app.use(cors());
app.use(json());


// Routers
app.use('/recipes', recipeRouter)
app.use('/categories', categoryRouter)
// app.use('/category/recepies', categoryRouter)


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})