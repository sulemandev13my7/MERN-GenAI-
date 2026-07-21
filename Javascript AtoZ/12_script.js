// sync and async
console.log(`first`)
console.log(`second`)

for (let i = 0; i <= 10; i++) {
    console.log('line 4')
}

setTimeout(()=>{
    console.log(`aysnc`)
},1000)

console.log(`third`)


class Student{
    constructor(room,std){
        this.room = room;
        this.std = std;
    }
}
const AllClass = new Student(20,300)
const AClass = new Student(1,30)
console.log(AllClass,AClass)



const myPro = new Promise((resolve,reject)=>{
    let sucess = true;
    if(sucess){
        resolve("My Promise Successfull")
    }else{
        reject("My Promise failed")
    }
})
.then((data)=>{
    console.log(`${data}`)
})
.catch((error)=>{
    console.log(error)
})