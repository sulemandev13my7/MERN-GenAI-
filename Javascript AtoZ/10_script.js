 let arr = [1, 2, 3, 4, 5];
 let arr1 = [23, 44, 65, 56];
 let arr2 = [23, 345, 56, 74];

 let result = [...arr, ...arr1, ...arr2]
 console.log(result)

 let result1 = arr.concat(arr1, arr2);


 //  Join means converts array into string
 let arr4 = ["arr1", "arr2", "arr3", "arr4"];
 console.log(arr4.join(" "))


 // split convert string into array
 let javascript = "javascript"
 console.log(javascript.split(""))

 //  convert array into string
 let arr5 = [1, 23, 43, 4];
 console.log(arr5.toString())

 //buffer data
 //  $fghkj& use toString() method to convert into string

 // slice method is used to extract a portion of an array and returns a new array
 let arr6 = [1, 2, 3, 4, 5, 6, 7, 8];
 console.log(arr6.slice(1, 5))
 // it will return [2,3,4,5] because it starts from index 1 and goes up to index 5 but not including index 5
 //  slice method does not change the original array 

 //  splice method is used to add or remove elements from an array
 let arr7 = [1, 2, 3, 4, 5, 6, 7, 8];
 arr7.splice(2, 3, "a", "b", "c") // it will remove 3 elements starting from index 2 and add "a", "b", "c" in their place
 console.log(arr7) // it will return [1, 2, "a", "b", "c", 6, 7, 8]
 // first parameter is the index from where to start removing elements, second parameter is the number of elements to remove, and the rest of the parameters are the elements to add in their place


 let arr12 = [1, 2, 3, 4, 5, 6, 7, 8];
 let result12 = arr12.splice(2, 3) // it will remove 3 elements starting from index 2 and return them in a new array
 console.log(result12) // it will return [3, 4, 5]
 console.log(arr12) // it will return [1, 2, 6, 7, 8] because the original array has been modified

 let arr13 = [1, 2, 3, 4, 5, 6, 7, 8];
 // check element is exist in array or not
 console.log(arr13.includes(3)) // it will return true because 3 is present in the array
 // find the index of an element in the array
 console.log(arr13.indexOf(5)); // it will return 4 because 5 is at index 4
 // reverse the array
 console.log(arr13.reverse()) // it will return [8, 7, 6, 5, 4, 3, 2, 1] because the array has been reversed
 // sort the array
 console.log(arr13.sort()) // it will return [1, 2, 3, 4, 5, 6, 7, 8] because the array has been sorted in ascending order

 let arr15 = [100, 5, 20];
 console.log(arr15.sort((a, b) => a - b)) // it will return [5, 20, 100] because the array has been sorted in ascending order
 console.log(arr15.sort((a, b) => b - a)) // it will return [100, 20, 5] because the array has been sorted in descending order

 // find method is used to find the first element in the array that satisfies the provided testing function
 let arr16 = [1, 2, 3, 4, 5, 6, 7, 8];
 let result16 = arr16.find((element) => element > 5) // it will return 6 because it is the first element that is greater than 5
 console.log(result16)

 // findIndex method is used to find the index of the first element in the array that satisfies the provided testing function
 let arr17 = [1, 2, 3, 4, 5, 6, 7, 8];
 let result17 = arr17.findIndex((element) => element > 5) // it will return 5 because it is the index of the first element that is greater than 5
 console.log(result17)

 // some
 // return true if at least one element matches
 const arr123 = [10, 20, 30];
 console.log(arr123.some(num => num > 25))

 // every
 // return true if all elements matches or satisfies the condition
 const arr124 = [10, 20, 30];
 console.log(arr124.every(num => num > 5))

 // flat
 // flat method is used to flatten an array
 const arr125 = [1, 2, [3, 4, [5, 6]]];
 console.log(arr125.flat(2)) // it will return [1, 2, 3, 4, 5, 6] because the array has been flattened to a depth of 2

 // fill
 // fill array with a static value
 // fill method is used to fill all the elements of an array with a static value
 const arr126 = [1, 2, 3, 4, 5];
 console.log(arr126.fill(0)) // it will return [0, 0, 0, 0, 0] because all the elements of the array have been filled with 0

 // Array.from()
 // Array.from() method is used to create a new array from an array-like or iterable object
 const arr127 = Array.from('hello');
 console.log(arr127) // it will return ['h', 'e', 'l', 'l', 'o'] because the string has been converted into an array of characters

 // Array.isArray()
 // Array.isArray() method is used to check if a value is an array
 const arr128 = [1, 2, 3, 4, 5];
 console.log(Array.isArray(arr128)) // it will return true because arr128 is an array
 console.log(Array.isArray('hello')) // it will return false because 'hello' is not an array

 // Array.of()
 // Array.of() method is used to create a new array from a variable number of arguments
 const arr129 = Array.of(1, 2, 3, 4, 5);
 console.log(arr129) // it will return [1, 2, 3, 4, 5] because the arguments have been converted into an array

 let digits = [8, 6, 9, 4, 23, 7, 5, 8];

 //  cube of array all element
 let cube = digits.map(num => num ** 3)
 console.log(cube)

 //  filter 350 greater then show
 let filterdigits = cube.filter(digit => digit > 350)
 console.log(filterdigits)

 //  all element minus 7
 let minus = filterdigits.map(digit => digit -= 7)
 console.log(minus)

 // all element add
 const total = minus.reduce((acc, val) => acc + val, 0)
 console.log(total)


 const students = [{
         name: "abc",
         marks: 89
     },
     {
         name: "def",
         marks: 49
     },
     {
         name: "ghi",
         marks: 78
     }
 ];
 const totals = students.reduce((acc, val) => acc + val.marks, 0)
 console.log(totals)

 const average = totals/students.length;
 console.log(average);