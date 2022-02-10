const express = require('express')
const app = express()
var cors = require('cors')
const path = require("path")

app.use(cors({
  origin:true,
  credentials:true
}))

app.use(express.json())


app.listen(3000, () => {
  console.log('Application is running on port 3000')
})
