/*////////////////////////////////////////////////////////
//------------------------------------------------------//
//--Getting Started Exercises with Javascript & Node.js-//
//--33. Ordinal Numbers------------------------------//
//------------if/else-statement-------------------------//
//------------------------------------------------------//
//------------------------------------------------------//
////////////////////////////////////////////////////////*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

alert("Please view console for the output");

console.log(arr);



for (var i=0; i<arr.length; i++) {
    
    if (arr[i] == 1) {
        console.log(arr[i] +'st');
    }
    else if (arr[i] == 2) {
        console.log(arr[i] + 'nd');
    }
    else if (arr[i] == 3) {
        console.log(arr[i] + 'rd'); 
        }
    else {
        console.log(arr[i] + 'th');
    }
    }
