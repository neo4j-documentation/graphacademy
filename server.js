const express = require('express')
const serveIndex = require('serve-index')

const app = express()
app.use(express.static('./build/site'))

app.use('/static/assets', express.static('./build/site/_'))
app.use('/', serveIndex('./build/site'))

app.listen(8000, () => console.log('📘 http://localhost:8000'))