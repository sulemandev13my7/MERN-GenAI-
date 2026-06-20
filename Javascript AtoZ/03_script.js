// for , while , do while
// for each , for of , for in
// map , reduce , filter


// for loop

// 1) starting point => intialization
// 2)ending point => conditon
// 3)way of move => increment/decrement 

// for (let i = 1; i <= 30; i++) {
//     console.log(i);
// }

// step 1 : intialization
// step 2 : condition checking
// step 3 : inside loop // 1
// interview question => 1 to 101 times becasue condion us false at 101 so loop back to 1 and print 1 to 100 and at 101 condition is false so loop is end

// for (let a = 1; a <= 20; a++) {
//     if (a % 2 === 0) {
//         console.log(a);
//     }
// }

// for (let i = 10; i >= 0; i--) {
//     console.log(i)
// }

// print table
// let table = 9;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${table} * ${i} = ${table * i}`)
// }

// let table = 12;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${table} X 1 = ${table * i}`);
// }


// Starting point =>3
// ending point =>89
//  if number is divisible by 5 (you have to add 2 in it)
//  if number is divisible by 7 (you have to subtruct 2 in it)

// for (let i = 3; i < 90; i++) {
//     if (i % 5 === 0) {
//         console.log("Divisible by 5 and 2 add ", i + 2)
//     }
// }
// console.log(`Program is End`)

// for (let i = 1; i < 90; i++) {
//     if (i % 7 === 0) {
//         console.log("Divisible by 7 and 2 subtruct ", i - 2)
//     }
// } 

// let name = "hospital";
// console.log(name.length);
// console.log(name[0])
// console.log(name[3])

// console.log(`Program is End`)

// let name = "hospital";
// for (let i = 0; i < name.length; i++) {
//     console.log(name[i]);
// };

// console.log(`Program is End`);

// let name = "hospital";
// for (let i = name.length - 1; i >= 0; i--) {
//     console.log(name[i])
// } 

let name = "civic";
let reverse = "";
for (let i = name.length - 1; i >= 0; i--) {
    console.log(name[i])
    reverse += name[i]
}

if (name === reverse) {
    console.log(name, " is palindrom");
} else {
    console.log(`not`);
}