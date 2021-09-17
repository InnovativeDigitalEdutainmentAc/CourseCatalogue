const express = require('express')
var mongoose = require('mongoose')

const app = express()

app.use(require('./routes/routes'))
app.use(express.static('public'))

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))

mongoose.connect('mongodb+srv://IDEA_01:idea1234@cluster0.emfwu.mongodb.net/IDEA?retryWrites=true&w=majority')

app.listen(3000, () => {
  console.log(`App listening at http://localhost:3000`)
})