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