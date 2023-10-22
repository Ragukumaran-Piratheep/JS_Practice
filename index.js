var nae1 = ['one', 'two' , 'three', 'four'];
var nae2 = nae1.toString();
console.log(typeof nae2);

// Object
var obj1 = new Object;
obj1.name = "John";
obj1.age = 30;
obj1.city = "New York";
console.log(obj1); // { name: 'John', age: 30, city: 'New York' }
// RegExp
// var regx1 = /abc/g;
// console.log(regx1); // /abc/g
// ArrayBuffer


// 1.Declare a variable named challenge and assign it to an initial value 'learn Javascript'.
var challenge = "Learn JavaScript in 30 Days.";
// 2.Print the string on the browser console using console.log()
console.log(challenge);

// 3.Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// 4.Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

// 5.Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

// 6.Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(0,5));

// 7.Slice out the phrase Days Of JavaScript from learn Javascript.
console.log(challenge.slice(0,16));

// 8.Check if the string contains a word Script using includes() method
console.log(challenge.includes('Learn'));

// 9.Split the string into an array using split() method
var arrChallenges = challenge.split("");
console.log(arrChallenges);

// 10.Split the string learn Javascript at the space using split() method
var arrChallengesSpace = challenge.split(" ");
console.log(arrChallengesSpace);

// 11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
var scl = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
var scl2 = scl.split(",")
console.log(scl2);

// 12.Change learn Javascript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript','Python'));