import express from 'express'
import IndexRouter from './src/routes/index.js'
const PORT = process.env.PORT || 7000
const app = express()

app.use('/',IndexRouter)

app.listen(PORT,()=>{
    console.log(`Server listening port ${PORT}`)
})