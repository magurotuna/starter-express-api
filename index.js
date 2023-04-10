const express = require('express')
const app = express()
app.all('/', (req, res) => {
  const rand = crypto.randomUUID();
  console.log("Just got a request!", rand, req)
  console.error("console.error", rand)
  res.send(`Yo!, ${rand}`)
})
app.listen(process.env.PORT || 3000)
