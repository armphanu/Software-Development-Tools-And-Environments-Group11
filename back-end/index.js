const express = require('express')
const app = express()
var cors = require('cors')
const path = require("path")
const PORT = process.env.PORT || 3332
require('./mongoose')
app.use(cors({
  origin:true,
  credentials:true
}))


app.use(express.json())

const loginRouter = require('./routes/login')
app.use(loginRouter.router)


const userRouter = require('./routes/user')
app.use(userRouter.router)


const postRouter = require('./routes/post')
app.use(postRouter.router)


const registerRouter = require('./routes/Register')
app.use(registerRouter.router)


const comment_like_report = require('./routes/comment_like_report')
app.use(comment_like_report.router)



app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`)
})

module.exports = app