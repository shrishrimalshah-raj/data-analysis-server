import app from './App'
import { dbConnection } from '../src/db';


require('dotenv').config()

const port = process.env.PORT || 5000

app.listen(port, (err) => {
  new dbConnection().getInstance();
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on ${port}`)
})
