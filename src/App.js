import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from 'mongoose';
import morgan from 'morgan';

require('dotenv').config()


import routes from './controller'
const app = express()

app.use(cors()) // We're telling express to use CORS
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// morgan
app.use(morgan('tiny'))


app.use('/api', routes) // tells the server to use the routes in routes.

app.get("/", (req, res) => {
  res.send("Hello Babel")
})



export default app;
