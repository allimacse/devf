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

console.log(
    getDitto()
);