/*////////////////////////////////////////////////////////
//------------------------------------------------------//
//--Getting Started Exercises with Javascript & Node.js-//
//--32. Checkinh Usernames------------------------------//
//------------if/else-statement-------------------------//
//------------------------------------------------------//
//------------------------------------------------------//
////////////////////////////////////////////////////////*/

var current_Users = ['Mohsin', 'Anees', 'nabeeL', 'Maaz', 'Saim', 'Fazeel'];
var new_Users = ['Adnan', 'SAim', 'Aneeq', 'Nabeel', 'Faisal', 'Zahid'];

alert("Please view console for the output");

console.log(current_Users, new_Users);


for (var i=0; i<new_Users.length; i++) {
    new_Users[i] = new_Users[i].toUpperCase();
//    console.log(new_Users);
    current_Users[i] = current_Users[i].toUpperCase();
//    console.log(current_Users);
}

for (var j=0; j<new_Users.length; j++) {
    if (current_Users.includes(new_Users[j])) {

        console.log(new_Users[j], ": Username not available, choose another one!");      
    }

    else {

        console.log(new_Users[j], ': Username is avialable');
    }
}