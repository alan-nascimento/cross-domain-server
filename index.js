const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.static(path.resolve(__dirname, './public')))

app.use('/', (req, res) => res.sendFile('./public/index.html', { root: __dirname }))

app.listen(3000, () => console.log('Server running'))
