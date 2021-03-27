const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World! Este é o teste do Carlos - RM338866 - Teste 2 - Pipeline em execução')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
