const express = require('express')
const mongoose = require('mongoose');
const Resource = require('express-resource')
const app = express()

app.resource('accounts', require('./routes/accounts'));

app.resource('classes', require('./routes/classes'));

app.resource('organizations', require('./routes/organizations'));

app.resource('professors', require('./routes/professors'));

app.resource('students', require('./routes/students'));

app.get('/', (req, res) => {
  res.send("<div><h3>Resources : </h3><ul><li>/accounts</li><li>/classes</li><li>/organizations</li><li>/professors</li><li>/students</li></ul></div>")
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
