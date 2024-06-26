require('dotenv').config()
const process = require('process')
const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express()
const userAgentMiddleware = require('./src/middlewares/user-agent')
const exposeServiceMiddleware = require('./src/middlewares/expose-services')
const authCookieMiddleware = require('./src/middlewares/auth-cookie')

const corsOptions = {
  origin: [process.env.API_URL]
}

app.use(cors(corsOptions))
app.use(express.json({ limit: '10mb', extended: true }))
app.use(userAgentMiddleware)
app.use(authCookieMiddleware)
app.use(...Object.values(exposeServiceMiddleware))
app.use(express.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }))

const routePath = './src/routes/'

fs.readdirSync(routePath).forEach(function (file) {
  require(routePath + file)(app)
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}.`)
})
