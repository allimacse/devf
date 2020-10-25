const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')

const app = express()
const PORT = 4000

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => console.log(`MongoDB connected at db: ${res.connections[0].name}`))
    .catch(err => console.error(err))

const CartoonSchema = new mongoose.Schema({
    name: String,
    release_year: Number,
    img_url: {
        type: String,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvzUaCzSJjteOHNMGfS7CKfBpRZ7-GG_v94w&usqp=CAU'
    },
    origin_country: String,
    author: String
})

const Cartoon = mongoose.model('Cartoons', CartoonSchema)

app.use(express.json({
    extended: true
}))

app.get('/', (request, response) => {
    response.json({
        message: 'Bienvenid@ a mi api, prueba crear una caricatura en el endpoint /cartoon/create'
    })
})

//Create Cartoon
app.post('/cartoons/create', async (req, res) => {
    const body = req.body
    const newCartoon = new Cartoon(body)
    try {
        const cartoonDoc = await newCartoon.save()
        res
            .status(201)
            .json(
                {
                    message: "Se ha creado un registro",
                    cartoon: cartoonDoc

                }
            )
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

// Get All Cartoons
app.get("/cartoons/", async (req, res) => {
    try {
        const cartoons = await Cartoon.find()
        res.json(cartoons)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

//getCartoon middleware
const getCartoon = async (req, res, next) => {
    let cartoon;
    try {
        cartoon = await Cartoon.findById(req.params.id);
        if (cartoon == null) {
            return res.status(404).json({ message: "Cannot find Cartoon" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.cartoon = cartoon;
    next();
}

// Get One Cartoon
app.get("/cartoons/:id", getCartoon, (req, res) => {
    res.json(res.cartoon);
});

// Edit One Cartoon PATCH version
app.patch("/cartoons/:id", getCartoon, async (req, res) => {
    // Rest of the code will go here
    const { name, release_year, img_url, origin_country, author } = req.body
    //Como poder encapsular esto en alguna funcion
    if (name != null) {
        res.cartoon.name = name
    }
    if (release_year != null) {
        res.cartoon.release_year = release_year
    }
    if (img_url != null) {
        res.cartoon.img_url = img_url
    }
    if (origin_country != origin_country) {
        res.cartoon.origin_country = origin_country
    }
    if (author != null) {
        res.cartoon.author = author
    }
    try {
        const updatedCartoon = await res.cartoon.save()
        res.json(updatedCartoon)
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Edit One Cartoon PUT version
app.put("/cartoons/:id", getCartoon, async (req, res) => {
    try {
        const updatedCartoon = await res.cartoon.set(req.body)
        res.json(updatedCartoon)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});

// Delete One Route
app.delete("/cartoons/:id", getCartoon, async (req, res) => {
    try {
        await res.cartoon.deleteOne()
        res.json({ message: "Cartoon has been deleted" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});


//Read

/* app.get('/cartoon/:id', async (request, response) => {
    try {
        const { id } = request.params
        const cartoonDoc = await Cartoon.findOne({ "name": "Alan" })
        response
            .json(
                {
                    message: "Alan",
                    cartoon: id

                }
            )
    } catch (error) {
        response
            .json(
                {
                    message: "Alan",
                    error: error

                }
            )
    }

}) */

//Update

//Delete

app.listen(PORT, () => { console.log(`Server initialized on PORT : http://localhost:${PORT}`) })

/* const saveCartoon = async (cartoon) => {
    const newCartoon = new Cartoon(cartoon)
    const cartoonDoc =  await newCartoon.save()
    console.log(cartoonDoc)
    return cartoonDoc
}
 */
