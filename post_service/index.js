const express = require('express')
const { randomBytes } = require('crypto')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 4000
const posts = {}

app.use(cors())
app.use(bodyParser.json())

app.get('/posts', (req, res) => res.status(200).send(posts))

app.post('/posts', (req, res) => {
  const { title } = req.body
  const id = randomBytes(4).toString('hex')
  posts[id] = { id, title }
  res.status(201).send(posts[id])
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
