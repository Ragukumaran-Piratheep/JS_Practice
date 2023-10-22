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

// 13.What is character at index 15 in 'learn Javascript' string? Use charAt() method.
console.log(challenge.charAt(15));

// 14.What is the character code of J in 'learn Javascript' string using charCodeAt()
console.log(challenge.charCodeAt(0));

// 15.Use indexOf to determine the position of the first occurrence of a in learn Javascript
console.log(challenge.indexOf('a'));

// 16.Use lastIndexOf to determine the position of the last occurrence of a in learn Javascript.
console.log(challenge.lastIndexOf('a'));

// 17.Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
var sentences = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentences.lastIndexOf('because'));

// 18.Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
var sentences = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentences.lastIndexOf('conjunction'));

// 19.Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
var sentences = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentences.search('is a conjunction'));

// Use startsWith() method with the string learn Javascript and make the result true
console.log(challenge.startsWith('Learn'));

// Use endsWith() method with the string learn Javascript and make the result true
var sentences = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentences.endsWith('a conjunction'));

// Use repeat() method to print learn Javascript 2 times
console.log(challenge.repeat(1));

// 