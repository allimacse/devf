const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    origin_country: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        enum: ['Science fiction', 'Horror', 'Drama']
    },
    directors: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Director'
        }
    ]

},{
    timestamps: true, versionKey: false
})


const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie