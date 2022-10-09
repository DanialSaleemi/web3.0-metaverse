/*////////////////////////////////////////////////////////
//------------------------------------------------------//
//--Getting Started Exercises with Javascript & Node.js-//
//--37. Functions---------------------------------------//
//------------T-shirt: Large shirts---------------------//
//------------------------------------------------------//
//------------------------------------------------------//
////////////////////////////////////////////////////////*/

alert("Please view console for the output");
function t_shirt(size = "Large", message = "I love Javascript"){

    console.log('Shirt size: ' + size, '-----',   ' Message : ' + message);
}

t_shirt();
t_shirt("Medium");
t_shirt("Small", "A different message");
