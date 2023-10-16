# ES6

## let and const

let is used to declare variables
const is used to declare constants

## Arrow function/ fat arrow functions

Helps in making code readable

``
const printAge = age =>{
    return `You are ${age} years old`;
}
``
## Template literal

using back ticks (`) instead of concatenating using +

## Object and Array Desctructuring

Unpacking the complex variable into smaller parts using variables.

` const person = {
    name : 'Gourav',
    age : '21',
    gender : 'male'
};
let{name,age,gender} = person; `

## Default parameters

Same like python 

`
function fun(a,b=1){
    return a + b;
}
`

## Rest Operator
Helps in taking indefinite number of arguments as an array by using 3 dots (...)

`
function fun(...input){
    let sum = 0;
    for(let i of input){
        sum+=i;
    }
    return sum;
}
`
## Spread Operator
Helps to pass an array which would normally show Nan

`
let arr = [1,2,3,-1];
console.log(Math.min(arr));
`
But adding ... will not show error
