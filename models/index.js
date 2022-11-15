const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URO, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports.Places = require('./places')