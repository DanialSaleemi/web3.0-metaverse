/*////////////////////////////////////////////////////////
//------------------------------------------------------//
//--Getting Started Exercises with Javascript & Node.js-//
//--22. Index Error-------------------------------------//
//------------------------------------------------------//
//------------------------------------------------------//
//------------------------------------------------------//
////////////////////////////////////////////////////////*/

var city = "Islamabad";
var river = "Seine";
var mountain = "K2";
var car = "BMW"; 
var place = "Home";
var language = "Urdu";

alert("Please view console for the output");

const arr=Array.of(city, river, mountain, car, place, language);

console.log(arr);
console.log(arr[10]);


//---- *****Attention requested**** I tried to generate an index 
//---- error by printing an insert out of bounds from my defined
//---- array but in console.log it gives "UNDEFINED" as the output
//----  instead of posting any error. 
