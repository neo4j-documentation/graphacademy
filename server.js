const express = require('express')
const serveIndex = require('serve-index')

const app = express()
app.use(express.static('./build/site'))

app.use('/static/assets', express.static('./build/site/_'))
app.use('/', serveIndex('./build/site'))

const port = process.env.PORT || '8000'
app.listen(port, () => console.log(`📘 http://localhost:${port}`))
