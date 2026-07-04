// function is a block of code that perform a specific task

// console.log(`first`)

// function hello(){
//     console.log(`first`)
// }
// hello()

// function hi(data){
//     console.log(`first`,data)
// }
// hi('name')

// function calculator(num1,num2,opt){
//     if(opt === "+"){
//         console.log(num1+num2)
//     }else if(opt === "-"){
//         console.log(num1-num2)
//     }else if(opt=== "*"){
//         console.log(num1*num2)
//     }else if(opt=== "/"){
//         console.log(num1/num2)
//     }else{
//         console.log(`Invalid Number`)
//     }
// }
// calculator(21,12,"*");
// calculator(21,12,"/");
// calculator(21,12,"+");

// function calculate(num1, num2, opt) {
//     if (opt === "+") {
//         return num1 + num2
//     } else if (opt === "-") {
//         return num1 - num2
//     } else if (opt === "/") {
//         return num1 / num2
//     } else if (opt === "*") {
//         return num1 * num2
//     } else {
//         return `Invalid Number`
//     }
// }
// const add = calculate(21, 23, "*")
// console.log(add)

// const greeting = function () {
//     console.log(`first`)
// }
// greeting()

// const greet = (num1, num2) => {
//     console.log(`first`, num1 + num2)
// }
// greet(12, 12)

// const sum = (a, b) => console.log(a + b)
// sum(12, 23)


// let printTable = (table, limit) => {
//     for (let i = 1; i <= limit; i++) {
//         console.log(`${table} X ${i} = ${table*i}`)
//     }
// }
// printTable(2, 3)

// setTimeout(() => {
//     console.log('time')
// }, 2000)

(()=> {
    console.log(`first`)
})()

// local scope
// variable inside function are local
function greet(){
    let x = 10;
    console.log(x)
}
greet()
// console.log(x) refernce error because x only exists inside the function

// Global scope
let a = 10;
function gre(){
    console.log(a)
}
gre()
console.log(a)

function outer(){
    console.log(`first`)
    function inner(){
        console.log(`Second`)
    }
    inner()
}
outer()

const camelcase = (name)=>{
    console.log(name.charAt(0).toUpperCase()+name.slice(1))
}
camelcase("salman")