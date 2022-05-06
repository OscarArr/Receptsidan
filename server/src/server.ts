import express, { Request, Response, json } from 'express'
import mongoose from 'mongoose'
import recipeRouter from './routes/recipe'
import categoryRouter from './routes/category'


const url = `mongodb+srv://OscarArr:KalasFest12@recipedb.xipac.mongodb.net/RecipeDB?retryWrites=true&w=majority`;

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
// mongoose.connect(url,connectionParams)
mongoose.connect(url)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

    
const app = express()

// Routers
app.use('/recipes', recipeRouter)
app.use('/id', recipeRouter)
app.use('/categories', categoryRouter)
app.use('/category', categoryRouter)
// app.use('/category/recepies', categoryRouter)

app.use(json())
const port = 4000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})