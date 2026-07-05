let student = {
    name: "salman",
    age: 21,
    qualification: "Softwere Engineering",
    hobbies: ["hourse riding", "swiming"],
    address: {
        sector: "13MY7",
        city: "Karachi"
    },
}
// console.log(student)
// console.log(student.name)
// console.log(student["name"])
// console.log(student.name,student.age,student.address,student.address.city,student.hobbies,student.hobbies[0])


let product = {
    img: "dummy.png",
    title: "T Shirt",
    rating: "****",
    sellingHistory: 75,
    old_Price: 59,
    new_Price: 121,
}
// console.log(product.title,product.rating)

let products = [{
        title: "abc",
        category: "perfume",
        color: "black",
        price: 45000,
        socks: 5
    },
    {
        title: "xyz",
        category: "shirt",
        color: "white",
        price: 1500,
        socks: 10
    },
    {
        title: "def",
        category: "pants",
        color: "blue",
        price: 2000,
        socks: 15
    },
    {
        title: "def",
        category: "jacket",
        color: "blue",
        price: 3000,
        socks: 20
    },
    {
        title: "jkl",
        category: "shoes",
        color: "green",
        price: 4000,
        socks: 25
    }
]
// console.log(products[0].title,products[0].category,products[0].color,products[0].price,products[0].socks)
// console.log(products[1].title,products[1].category,products[1].color,products[1].price,products[1].socks)

// used in objects
// for loop
// for of loop
// for in loop
// forEach loop
// map ,filter, reduce methods

// access index 
// for (let product of products) {
//     console.log(product)
// }
// access print values 
// for (let product of products) {
//     console.log(product.title, product.price, product.category)
// }

// products.forEach((pro) => {
//     console.log(pro["title"])
// })

// let newProd = products.map((product) => {
//     return product.title
// });
// console.log(newProd)

// products.filter((prod)=>{console.log(prod.price<=2000)})

// let filterPro = products.filter((pro)=>{
//     return pro.price<=2000
// })
// console.log(filterPro)
// filterPro.map((pro)=>{console.log(pro.price)})

// let total = products.filter(pro=>pro.color==="blue").map(pro=>pro).reduce((acc,val)=>
//     acc + val.price , 0)
// console.log(total)

let total = products.filter(pro=>{
    if(pro.color === "b"){
        console.log(pro) 
    }
}).map((pro)=>console.log(pro))
console.log(total) 
