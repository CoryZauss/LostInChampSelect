const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.static("client/public"));


app.get('/', (req, res) => {
  res.send('lost in champ select')
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})

