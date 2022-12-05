const express = require('express')
const mongoose = require('mongoose')

//CONFIG
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) })

// Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


// Controllers & Routes
app.get('/', (req, res) => {
    res.render('home')
})

//PLACES
app.use('/places', require('./controllers/places'))

//404 ERROR PAGE
app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for Connections
app.listen(process.env.PORT)