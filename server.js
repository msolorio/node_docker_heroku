const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({ 'message': 'You hit the root route' })
})

app.listen(PORT, () => {
  console.log('Your app is running on PORT:', PORT)
})