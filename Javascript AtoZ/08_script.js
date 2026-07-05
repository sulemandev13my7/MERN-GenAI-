// array
// collection of  data 
// let students = ["red",true, false, null, undefined, "ali", "ahmed", 45, 67.8];

let marks = [78, 90, 45, 78, 23, 99];
console.log(marks);
console.log(marks[0]); // 78

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i])
}

for (let mark of marks) {
    console.log(mark)
}

for (let mark in marks) {
    console.log(mark, marks[mark])
}

marks.forEach((pro) => {
    if (pro <= 50) {
        console.log(pro)
    }
})

// map,filter,reduce

let marks1 = [12,123,244,54,34,34];
let high = marks1[0];

for(let i of marks1){
    if(i > high){
        high = i;
    }
}
console.log(high)