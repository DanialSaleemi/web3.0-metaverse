//////////////////////////////////////////////////////////
/*------------------------------------------------------//
//--Getting Started Exercises with Javascript & Node.js-//
//--15. Guest List - Modification-----------------------//
//------------------------------------------------------//
//------------------------------------------------------//
//------------------------------------------------------*/
//////////////////////////////////////////////////////////
var temp = null;
var Guestlist=["Ali", "Ahmad", "Hamza"]; 

temp = Guestlist[1];  
document.write("Assalam o Alaikum ", Guestlist[0], ", I would like to invite you to the dinner at my place this weekend.", "<br\>");
// document.write("Assalam o Alaikum ", Guestlist[1], ", I would like to invite you to the dinner at my place this weekend.", "<br\>");
document.write("Assalam o Alaikum ", Guestlist[2], ", I would like to invite you to the dinner at my place this weekend.", "<br\>");

Guestlist[1] = "Qasim"
document.write("Since ", temp, " wont be able to join us, so I am inviting ", Guestlist[1], "<br\>");
document.write("Assalam o Alaikum ", Guestlist[1], ", I would like to invite you to the dinner at my place this weekend.", "<br\>");

