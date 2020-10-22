// 1ro
function printNumber() {
    for (let i = 1; i <= 100; i++) {
        console.log(i % 5 === 0 ? i % 3 === 0 ? i + 'FizzBuzz' : i + 'Fizz' : i % 3 === 0 ? i + 'Buzz' : i + '')
    }
}


//2do

const arrayOne = [5, 1, 42, 2, "HOLA COMO ESTAS", "SOY ALAN", "HOLA"]
const arrayTwo = [5, 1, 42, 2, 55,10]

function getStringMayor(arrayIn) {
    let arrayFix = []
    for (let i = 0; i < arrayIn.length; i++) {
        typeof (arrayIn[i])=== "string"? arrayFix.push(arrayIn[i]) : ''
    }
    if (arrayFix.length > 0) {
        let maxLengthString = ""
        for (let i = 0; i < arrayFix.length; i++) {
            arrayFix[i].length >maxLengthString.length ? maxLengthString = arrayFix[i] : ''
        }
        //console.log(maxLengthString)
    }else{
        //console.log("El arreglo no contenia elementos")
    }
    
}

getStringMayor(arrayTwo)



const calif = [6,4,7,1,2,8,10,5,8,9]
const califdos = [1,2,3,4,5,6]

const mean = (list) => {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        count+=list[i];
    }
    return count/list.length
}

//console.log(mean(califdos))

//const calif = [6,4,7,1,2,8,10,5,8,9]
//const califdos = [1,2,3,4,5,6]

const median = (list) => {
    let value = 0;
    let listSort = list.sort((a,b)=>a-b)
    console.log(listSort);
    if (listSort.length%2!==0) {
        value = listSort[Math.trunc(listSort.length/2)]
    }else{
        value = (listSort[Math.round((listSort.length/2))]+listSort[Math.trunc(listSort.length/2)])/2
    }
    return value
}

console.log(median(calif));

const mode = (list) => {
    for (let i = 0; i < list.length; i++) {
        
    }
}