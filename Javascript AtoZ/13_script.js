// closure

// let name = "salman";

// const outer = () => {

//     let name = "haris"

//     const inner = () => {
//         return name
//     }

//     return inner()
// }

// const result = outer();
// console.log(result);

// array destructuring 

// const marks = [60, 45, 54];

// const [stud1, stud2] = marks;
// console.log(stud1, stud2);


//object destructring
// let obj = {
//     name: "salman",
//     age: 12,
//     uni: 12
// };
// const {
//     name,
//     age,
//     uni
// } = obj;

// console.log(name, age, uni)

// spread operator
const marks1 = [5, 7, 9, 10]
const marks2 = [1, 2, 3, 4]

const marks = [...marks1,...marks2];
console.log(marks)

// rest operator
const addNumbers= (a,b,c)=>{
    console.log(12+2+23)
}
addNumbers(1,2,3)
addNumbers(1,2,3,234,45)


const addNumber= (...number)=>{
    console.log(number)
}
addNumber(1,2,3)
addNumber(1,2,3,234,45)



const addNumbe= (...number)=>{
    let total = 0;
    number.map((n)=>{
        total += n
    })
    console.log(total)
}
addNumbe(1,2,3)
addNumbe(1,2)
addNumbe(1,2,3,234,45)

let obj = {
    name:"salman",
    age:12
}
let obj2={
    ...obj,
    university:"FAST"
}
console.log(obj2)