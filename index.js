const express = require('express')
const app = express()
const port = 5000

// connect with MongoDB
// if it works, pop up success message
// or it doesn't, pop up the content of error
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://minji:0g91y6u1004@kodon.mbjp6.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

// DB schema

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
