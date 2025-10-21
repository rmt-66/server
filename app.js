const express = require('express')
const cors = require('cors')

const homeRouter = require('./router/home')
const authRouter = require('./router/auth')
const app = express()
const port = 3000

// middleware
app.use(express.json())
app.use(cors())

app.use(homeRouter)
app.use('/auth', authRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
