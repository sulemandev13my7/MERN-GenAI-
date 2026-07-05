// array
// collection of  data 
// let students = ["red",true, false, null, undefined, "ali", "ahmed", 45, 67.8];

// let marks = [78, 90, 45, 78, 23, 99];
// console.log(marks);
// console.log(marks[0]); // 78

// for (let i = 0; i < marks.length; i++) {
//     console.log(marks[i])
// }

// for (let mark of marks) {
//     console.log(mark)
// }

// for (let mark in marks) {
//     console.log(mark, marks[mark])
// }

// marks.forEach((pro) => {
//     if (pro <= 50) {
//         console.log(pro)
//     }
// })

// map,filter,reduce

// let marks1 = [12,123,244,54,34,34];
// let high = marks1[0];

// for(let i of marks1){
//     if(i > high){
//         high = i;
//     }
// }
// console.log(high)

// let marks = [1,2,3,4,5,6,7,8,9,10];
// // square of each number
// for(let mark of marks){
//     console.log(mark ** 2);
// }
// // cube
// for(let mark of marks){
//     console.log(mark ** 3);
// }
// // add
// for(let mark of marks){
//     console.log(mark+2)
// }

// sum of array all elements
// let marks1 = [1,2,3,4,5,6,7,8,9,10];
// let total1 = 0;
// for(let mark of marks1){
//     total1 += mark;
// }
// console.log(total1);

// sum of array all elements
// let marks2 = [1,2,3,4,5,6,7,8,9,10];
// let total2 = 0;
// marks2.forEach((pro)=>{
//     total2 += pro;
// })
// console.log(total2);

// map //filter //reduce ye b loop ki tara kam karty hai jab k ya method hai

// let stdents = ["ali", "ahmed", "hassan", "hussain", "ali", "ahmed", "hassan", "hussain"];
// stdents.map((stud)=>{ console.log(stud)})

//map always return new array
// let students2 = stdents.map((stud)=>{ return stud})
// console.log(students2)

// let students3 = stdents.map((stud)=>{ return stud.toUpperCase()})
// console.log(students3)

// let marks = [1,23,43,56,54];
// marks.filter((mark)=>{
    //     console.log(mark > 25)
// })
// outputfalse
// false
// true
// true
// true

// marks.filter((mark)=>{
    //     if(mark > 25){
        //         console.log(mark)
        //     }
// })
// 43
// 56
// 54

// let marks = [1,23,43,56,54];
// let filteredMark = marks.filter((mark)=>mark>45);
// console.log(filteredMark)


// let marks = [1,23,43,56,54];
// let filteredMark = marks.filter((mark)=>mark>45).map((filter)=>console.log(filter))

// reduces
// let marks = [1,23,43,56,54];
// let total = marks.reduce((acc,val)=>
//     return acc+val
// })
// console.log(total)

// let marks = [1,23,43,56,54];
// let total = marks.reduce((acc,val)=>{
//     return acc+val
// },10)
// console.log(total)

// acc = 0
// value = 1
// acc = 0+1 = 1
// value = 23
// acc = 1+23 = 24
// value = 43
// acc = 24+43 = 67

// const products = [500,800,700,560,340,890,322];

// let total = products.filter(pro=> pro >500).map(fpro=>fpro).reduce((acc,val)=> acc+val,0);
// console.log(total)


// push ,pop,shift,unshift
let marks = [56,89,54,90];

// marks.push(12)
// console.log(marks)

// marks.pop();
// console.log(marks)

// marks.shift();
// console.log(marks)

// marks.unshift(12);
// console.log(marks);

// let students = ["ali","ahmed","haris","salman","alyas"];
// students.filter((pro)=>{
//     if(pro[0] === "a"){
//         return pro
//     }
// }).map((pro)=>console.log(pro))

let students = ["ali","ahmed","haris","salman","alyas"];
students.filter(student=>student[0]==="a").map(std=>console.log(std))
