import express, { Request, Response, json } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import recipeRouter from './routes/recipe'
import categoryRouter from './routes/category'


const app = express()


const url = `mongodb+srv://OscarArr:KalasFest12@recipedb.xipac.mongodb.net/RecipeDB?retryWrites=true&w=majority`;

mongoose.connect(url)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
      console.error(`Error connecting to the database. n${err}`);
    })



app.use(cors());
app.use(json());
const port = 4000;


// Routers
app.use('/recipes', recipeRouter)
app.use('/id', recipeRouter)
app.use('/categories', categoryRouter)
app.use('/category', categoryRouter)
// app.use('/category/recepies', categoryRouter)


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})