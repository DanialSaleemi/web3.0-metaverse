//////////////////////////////////////////////////////////
/*------------------------------------------------------//
//--Getting Started Exercises with Javascript & Node.js-//
//--17. Guest List - Modification_r3--------------------//
//---------Shrinking Guest list-------------------------//
//------------------------------------------------------//
//------------------------------------------------------*/
//////////////////////////////////////////////////////////
var temp = null;
var Guestlist=["Ali", "Ahmad", "Hamza"]; 

Guestlist.unshift("Umar");
Guestlist.splice(3,0,"Moeed");
Guestlist.push("Nasir");

console.log(Guestlist);


document.write("Sorry Fellas, due to unforeseen circumstances, we can only host two people at the dinner.", "<br\>"); 
for (var i=0; i<Guestlist.length+2; i++) {
    var j = Guestlist.pop();
    document.write("<br\>","I'm sorry ", j, ", We have to cancel this out", "<br\>");
    document.write(Guestlist[0], " and ", Guestlist[1], " you are still on the lsit, enjoy!", "<br\>");
}


Guestlist.splice(0,2);

alert("Please view console for the empty array");
console.log(Guestlist);

//document.write("Since ", temp, " wont be able to join us, so I am inviting ", Guestlist[1], " instead. <br\>");

/*document.write("Assalam o Alaikum ", Guestlist[0], ", I would like to invite you to the dinner at my place this weekend.", "<br\>");
// document.write("Assalam o Alaikum ", Guestlist[1], ", I would like to invite you to the dinner at my place this weekend.", "<br\>");
document.write("Assalam o Alaikum ", Guestlist[2], ", I would like to invite you to the dinner at my place this weekend.", "<br\>");

Guestlist[1] = "Qasim"

document.write("Assalam o Alaikum ", Guestlist[1], ", I would like to invite you to the dinner at my place this weekend.", "<br\>");
*/
