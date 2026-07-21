// const heading = document.getElementById("head-1");
// heading.innerHTML = "I am learning Js and HTML with Dom";
// heading.style.color = "red"
// heading.style.fontSize = "50px"
// console.log(heading);

// const heading = document.getElementsByClassName("heading-1");
// console.log(heading)
// heading[0].innerHTML = "I am learning Js and HTML with Dom";
// heading[0].style.color = "red"
// heading[0].style.fontSize = "50px"
// console.log(heading);

// const heading = document.querySelector("#head-1");
// heading.innerHTML = "I am learning Js and HTML with Dom";
// heading.style.color = "red"
// heading.style.fontSize = "50px"
// console.log(heading);

// const heading = document.querySelector(".heading-1")
// const redbtn = document.querySelector(".red") 
// const greenbtn = document.querySelector(".green") 

// redbtn.addEventListener('click',()=>{
//     heading.innerHTML="I am red";
//     heading.style.color = "red";
// });

// const changeGreen = ()=>{
//     heading.innerHTML = "I am Green"
//     heading.style.color = "green"
// }
// greenbtn.addEventListener('click',changeGreen);

// const body = document.querySelector("body");
// const btn = document.querySelector(".change-color-btn");

// body.style.backgroundColor = "green";

// const changeBackgroundColor = ()=>{
//     let red =  Math.floor(Math.random()*225);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);
//     console.log(red,green,blue)
//     let color = `rgb(${red},${green},${blue})`
//     console.log(color)
//     body.style.backgroundColor = color;
// }


// btn.addEventListener('click',()=>{
//     changeBackgroundColor()
// })

// asynchronus
// synchronus

// console.log('line 1');

// setTimeout(() => {
//     console.log(`line 2`)
// }, 5000)

// for(let i=0; i <= 10000; i++){
//     console.log(`line 3`)
// }

// console.log('line 4')
// this all process is called event loop


// let body = document.querySelector('body');

// const changeColor = ()=>{
//     let red = Math.floor(Math.random()*255)
//     let green = Math.floor(Math.random()*255)
//     let blue = Math.floor(Math.random()*255)
//     let color = `rgb(${red},${green},${blue})`
//     console.log(color);
//     body.style.backgroundColor = color; 
// }

// let id = setInterval(()=>{
//     changeColor()
// },1000);

// console.log(id)