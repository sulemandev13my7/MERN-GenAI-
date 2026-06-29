// let age = "laptop";
// console.log(age);
// console.log(age.length);

// console.log(age[0]);
// console.log(age[1]);
// console.log(age[2]);
// console.log(age[3]);
// console.log(age[4]);

// for(let i = 0; i < age.length; i++){
//     console.log(age[i]);
// }

// let name = "laptop";
// console.log(name.charAt(2));


// ASCII value
// let n = "A";
// console.log(n.charCodeAt());

// let firstName = "ali";
// let lastName = "Khan";

// let fullname = firstName + " " + lastName;
// let nickName = firstName + lastName;

// console.log(fullname);
// console.log(nickName);
// console.log(`${firstName} ${lastName}`);
// console.log(firstName.concat(" " + lastName));

// let str = "Hello";
// console.log(str.at(4));

// let str1 = "hello";
// console.log(str1.at(-1));


// let str = "Javascript";
// console.log(str.slice(1, 6)) // first included not last included

// let str2 = "laptop";
// console.log(str2.substr(2,3));// pto

// let name = "salman";
// console.log(name.toUpperCase());

// let name2 = "SULEMAN";
// console.log(name.toLowerCase());

// let name = "   laptop  ";
// console.log(name.trim());

// let name = "   laptop  ";
// console.log(name.trimStart());

// let name = "   laptop  ";
// console.log(name.trimEnd());

// let str3="hi";
// console.log(str3.repeat(4));

// let str4 = "hello I am Salman ";
// console.log(str4.replace("Salman", "Suleman"));

// let name = "I love cat cat";
// console.log(name.replaceAll('cat','dog'))

let chr = "javascript";
console.log(chr.includes("java"));


let char = "javascript";
let count = 0;
for(let i = 0; i<char;i++){
    if(char[i]==="a"||char[i]==="e"||char[i]==="i"||char[i]==="o"||char[i]==="u"){
        count++
    }
}
console.log(count);

// for in * index print
// for of * char of string or Element of array print
// for Each

let name = "Suleman";

for(let n of name){
    console.log(n)
}