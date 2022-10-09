/*////////////////////////////////////////////////////////
//------------------------------------------------------//
//--Getting Started Exercises with Javascript & Node.js-//
//--24. More Conditional Tests--------------------------//
//------------------------------------------------------//
//------------------------------------------------------//
//------------------------------------------------------//
////////////////////////////////////////////////////////*/

let city = "Islamabad";
let river = "Seine";
let mountain = "K2";
let car = "BMW"; 
let place = "Home";
let language = "Urdu";
let x = 6;

alert("Please view console for the output");

arr = Array.of(city, car, river, mountain, language);



console.log("Is place = 'Home'?", place == 'Home');
console.log("Can we call it home?", place == 'home');

console.log("You write your city name as: Islam abad?", city == "Islam abad");
console.log("It should be written as 'Islamabad'", city=='Islamabad');

console.log("'K2' is the name of a river", 'K2' == river);

console.log("x = ", x);
console.log("2+2 = x ", 2+2 == x);
console.log("2 * 3 = x", 2*3 == x);
console.log("x = 3/2", x == 3/2);
console.log("9 is less than x", 9 < x);
console.log("8 is greater than or equal to x", 8 >= x);
console.log()

console.log("English is included in Array", arr[4] == 'English');
console.log("Urdu is included in Array", arr[4] == "Urdu");
console.log("Array has listed 8 items", arr.length == 8);