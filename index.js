const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const {User} = require("./models/User");

// key.js에서 가져오기(mongodb uri)
const config = require('./config/key');

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// application/json
app.use(bodyParser.json());


// connect with MongoDB
// if it works, pop up success message
// or it doesn't, pop up the content of error
const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

// DB schema

app.get('/', (req, res) => {
  res.send('Hello World! 새해복 많이 받으세요~')
})


app.post('/register', (req, res) => {
  // 회원 가입에 필요한 정보들을 client에서 가져오면
  // 그것들을 db에 넣어준다
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({success: true})
  });
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
