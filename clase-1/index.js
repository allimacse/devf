/* let MathCalif = 9

const Promesa = new Promise((resolve,reject) => {
    if (MathCalif===10) {
        resolve('Nuevo Celular')
    }else{
        reject('Sigue Participando')
    }
})


Promesa
    .then((res)=> {
        console.log(res);
    })
    .catch((res)=>{
        console.log(res);
    })
    .finally(()=>{
        console.log("Esto siempre se ejecuta");
    })

console.log(Promesa); */


const axios = require('axios')

const getDitto = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}

const getPokemonById = (id) => {
    return axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
        .then((res) => {
            //console.log(res.data)
            return res.data
        })
        .catch((err) => {
            //console.log(err);
            return err
        })
}

getPokemonById(1).then((res) => {
    console.log(res)
})


const getPokemonMovesById = (id) => {
    // 
    return getPokemonById(id).then((res) => {
        let PokemonMovesName = []
        //console.log(res.moves)
        res.moves.forEach((move, index) => {
            PokemonMovesName.push(move.move.name)
        })
        //console.log(PokemonMovesName)
        return PokemonMovesName
    })
}

/* getPokemonMovesById(1).then((res) => {
    console.log(res)
}) */


const getPotentiallyHazardousAsteroid = () => {
    return axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=n5T44Ib5b9VBUta4lB4tFrasUpD6VFlNomKrdfFH')
        .then((res) => {
            let potentiallyHazardousAsteroid = []
            //console.log(res.data.near_earth_objects)
            res.data.near_earth_objects.forEach((asteroid, index) => {
                
                if (asteroid.is_potentially_hazardous_asteroid === true) {
                    potentiallyHazardousAsteroid.push(asteroid)
                    //console.log(asteroid.is_potentially_hazardous_asteroid)
                }

            })
            console.log(potentiallyHazardousAsteroid);
            return potentiallyHazardousAsteroid
        })
        .catch((err) => {
            console.log(err);
            return err
        })
}

getPotentiallyHazardousAsteroid().then((res) => {
    //console.log(res)
})
