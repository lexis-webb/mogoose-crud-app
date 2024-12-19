require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5050
const conn = require('./config/db')
conn()
const starterFruits = require('./config/seed')
const Fruit = require('./models/fruit')
const  fruitRoutes = require('./routes/fruitRoutes')

app.use(express.json())
app.use('/api/fruits', fruitRoutes)

// home route 
app.get('/', (req,res)=> {
    res.send('Home Page!')
})

// Seed route = populate or db with starter data
app.get('/fruits/seed', async (req,res) => {
    try{
        await Fruit.deleteMany({})
        await Fruit.create(starterFruits)
        res.json(starterFruits)
    } catch (error) {
        console.log(`Something went wrong loading send data: ${error.message}`)
    }
})




app.listen(port, () =>{
    console.log(`listening on port: ${process.env.PORT}`)
})