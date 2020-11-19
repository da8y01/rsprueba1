const express = require('express');
const bodyParser = require('body-parser')
var cors = require('cors');
const app = express();

app.use(cors());

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   // res.sendFile(__dirname + '/index.html')
//   // Note: __dirname is the current directory you're in. Try logging it and see what you get!
//   res.json({ message: "Welcome to Students application." });
// })

// app.post('/students', (req, res) => {
//   console.log('post to /students')
// })

require("./student.routes.js")(app);

app.listen(3000, function () {
  console.log('listening on 3000')
})