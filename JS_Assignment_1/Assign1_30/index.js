/*////////////////////////////////////////////////////////
//------------------------------------------------------//
//--Getting Started Exercises with Javascript & Node.js-//
//--30. Hello Admin-------------------------------------//
//------------if/else-statement-------------------------//
//------------------------------------------------------//
//------------------------------------------------------//
////////////////////////////////////////////////////////*/

const userName = ['Ali', 'Qasim', 'Faizan', 'Zeb', 'admin'];

alert("Please view console for the output");

for (var i=0; i<userName.length; i++) {

    
    if (userName[i] != 'admin') {
        console.log("Hello", userName[i], ", Thank you for logging in again");
    }
    else {
        
        console.log("Hello admin, would you like to see the status report?");
    }
    }


