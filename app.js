//// Scope
// let a = 10
// function outer(){
//     let b = 20 
//     function inner(){
//         let c = 30
//         console.log(a, b , c)
//     }
//     inner()
// }
// outer()


//// Closure
// function outer(){
//     let counter = 0 
//     function inner(){
//         counter++
//         console.log(counter)
//     }
//     return inner
// }
// const fn = outer()
// fn()
// fn()

//// Currying
// function sum(a,b,c){
//     return a+b+c
// }
// console.log(sum(2,3,4))

// function curry(fn){
//     return function(a){
//         return function(b){
//             return function(c){
//                 return fn(a,b,c)
//             }
//         }
//     }
// }
// const curriedSum = curry(sum)
// console.log(curriedSum(2)(3)(4))


function sum(a){
    return function (b){
        return a+b
    }
}
console.log(sum(2)(3))

// ES6 Easy consice way
const curriedAdd = (a) => (b) => a+b    
console.log(curriedAdd(2)(3))   

// Partial Application
const addTwo = sum(2)
console.log(addTwo(6))
const addThree = sum(3)
console.log(addThree(7))


// Real world use case of currying
// Configuration of a Logger
const logger = (level) => (message) => `[${level.toUpperCase()}]: ${message}`;

const logInfo = logger('info')
const logError = logger('error')

console.log(logInfo('This is an info message'))
console.log(logError('This is an error message'))
