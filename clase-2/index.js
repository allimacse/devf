const express = require('express')
const axios = require('axios')

const app = express()
const PORT = 4000

app.get('/', (request, response) => {
    response.json({
        message: 'Bienvenid@ al app'
    })
})

app.get('/perro', (request, response) => {
    response.json({
        message: 'Bienvenid@ a perrolandia'
    })
})
//Parametro con :parameter
app.get('/pokemon/:id', (request, response) => {
    const { id } = request.params


    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((pokeApiResponse) => {
            console.log(pokeApiResponse)
            response.json({
                message: pokeApiResponse.data
            })
        })
        .catch((err) => {
            response.json({
                err
            })
        })
})

app.get('/search', (request, response) => {
    const query = request.query
    response.json({
        message: query
    })
})

app.listen(PORT, () => { console.log(`Server initialized on PORT : http://localhost:${PORT}`) })