const express = require('express')
const { randomBytes } = require('crypto')
var bodyParser = require('body-parser')
const app = express()
const port = 4001
const comments = {}

app.use(bodyParser.json())

app.get('/posts/:id/comments', (req, res) => {
  const { id } = req.params
  res.status(200).send(comments[id] || [])
})

app.post('/posts/:id/comments', (req, res) => {
  const { content } = req.body
  const { id } = req.params
  const commentId = randomBytes(4).toString('hex')
  const postComments = comments[id] || []
  postComments.push({id: commentId, content})
  comments[id] = postComments
  res.status(201).send(comments[id])
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
