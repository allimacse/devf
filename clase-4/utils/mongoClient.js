const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => console.log(`MongoDB connected at db: ${res.connections[0].name}`))
    .catch(err => console.error(err))