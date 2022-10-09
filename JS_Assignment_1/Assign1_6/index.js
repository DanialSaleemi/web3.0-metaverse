//////////////////////////////////////////////////////////
/*------------------------------------------------------//
//--Getting Started Exercises with Javascript & Node.js-//
//--6. Stripping Names----------------------------------//
//------------------------------------------------------//
//------------------------------------------------------//
//------------------------------------------------------*/
//////////////////////////////////////////////////////////

var MyName = "\tDinata\nle";
var temp1;
var temp2;
console.log("Original string: ", MyName);
temp1 = MyName.trim();
temp2 = MyName.replace(/\s/g, '');
console.log("wihtout tabs: ", temp1);
console.log("without tabs and breaks: ", temp2);