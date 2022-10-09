/*////////////////////////////////////////////////////////
//------------------------------------------------------//
//--Getting Started Exercises with Javascript & Node.js-//
//--42. Functions---------------------------------------//
//------------show_magicians()/Great magicians----------//
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
        console.log('Great magician ' + magician[i]);
    }
}
make_great(arr);