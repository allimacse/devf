const express = require('express')
const router = express.Router()
const { Movie } = require('../models/index.js')

router.use(express.json({
    extended: true
}))

router.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.find().populate('directors')
        res.json(movies)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.post('/movies/create', async (req, res) => {
    const body = req.body
    const newMovie = new Movie(body)
    try {
        const savedMovie = await newMovie.save()
        res
            .status(201)
            .json(
                {
                    message: "Se ha creado un registro",
                    payload: savedMovie
                    
                }
            )
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})


module.exports = router