//////////////////////////////////////////////////////////
/*------------------------------------------------------//
//--Getting Started Exercises with Javascript & Node.js-//
//--18. Seeing the world--------------------------------//
//---------------Sorting arrays-------------------------//
//------------------------------------------------------//
//------------------------------------------------------*/
//////////////////////////////////////////////////////////
var temp = null;
var cities=["Istanbul", "Budapest", "Ankara", "Rome", "Skardu"]; 
alert("Please open console as well");

console.log(cities);

var result  = [...cities].sort()
document.write("Original order: ", cities, "<br\>");  //before sort
document.write("<br\>", "Alphabetical order: ", result);  //after sort(alphabetical)
document.write("<br\>", "Original order after update: ", cities, "<br\>");
result = [...result].reverse();
document.write("<br\>", "Reverse Alphabetical order: ", result);  //after sort(reverse alphabetical)
document.write("<br\>", "Original order after update: ", cities, "<br\>");
result = [...cities].reverse();
document.write("<br\>", "Reverse list order: ", result);
result = [...result].reverse();
document.write("<br\>", "Reverse list again: ", result, "<br\>");
cities = [...cities].sort();

document.write("<br\>", "Alphabetically sorted: ", cities, "<br\>");
console.log(cities);

cities = [...cities].reverse();
document.write("Alphabetically reverse sorted: ", cities, "<br\>");

console.log(cities);

