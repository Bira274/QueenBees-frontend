const express = require('express')
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')

const port = 3000
const USERS = []

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());
app.use(cors())




app.get('/', (req, res) => {
  res.send({"message": "Tesk ok!"})
})

app.post('/register', (req, res) => {
    const {name, email, password, phone} = req.body
    const user ={
        name,
        email,
        password,
        phone
    }

    USERS.push(user)

    res.send(user)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})