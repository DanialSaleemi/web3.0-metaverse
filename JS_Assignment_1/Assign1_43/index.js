/*////////////////////////////////////////////////////////
//------------------------------------------------------//
//--Getting Started Exercises with Javascript & Node.js-//
//--43. Functions---------------------------------------//
//------------show_magicians()/Great magicians_r2-------//
//------------------------------------------------------//
//------------------------------------------------------//
////////////////////////////////////////////////////////*/

alert("Please view console for the output");

function show_Magician (magician) {
    for (let i = 0; i<magician.length; i++)
    {
        console.log(magician[i]);
    }
    return magician;
    
}

arr = ['nick', 'eric', 'joe'];
show_Magician(arr);

function make_great(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log('Great ' + magician[i]);
    }
    console.log("Original array: ", magician);
}
make_great(arr);

function new_magician(magician) {
    for (let i=0; i<magician.length; i++) {
        magician[i] = "Great magician: " + magician[i];
        
    }
    console.log("Updated array: ", magician);
}

new_magician(arr);