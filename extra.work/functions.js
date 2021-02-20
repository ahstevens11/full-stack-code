//functions:

//this is the function declaration/definition
// function makeBread () {
//     //this is the function body
//     console.log('bread')
// }
// //this is the function invokation
// makeBread()

// //another way to do the above (this is called a function expression)
// const makeBeer = function () {
//     console.log('beer')
// }
// makeBeer()


//function Parameters vs Function Arguments
function makeSushi(qty) {
    return 'sushi'.repeat(qty)
}

const fishy = makeSushi(8)
console.log(fishy)
//this will make sushi 8 times 
//Parameter are the names listed in the function definition (qty) here
//Arguments are the values passed into the function (8)


//Anonomyous Functions


//Pure Functions: 
// - Only uses its input to return some output with no additinal side effects
const myString = 'Hello there'
function notPure() {
    return `$(myString) Hi` //usage of a global variable
}

function pure() {
    return 'Hello my name is ${name}'
}
pure('Austin')