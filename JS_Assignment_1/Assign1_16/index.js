//////////////////////////////////////////////////////////
/*------------------------------------------------------//
//--Getting Started Exercises with Javascript & Node.js-//
//--16. Guest List - Modification_r2--------------------//
//---------Found Bigger Table---------------------------//
//------------------------------------------------------//
//------------------------------------------------------*/
//////////////////////////////////////////////////////////
var temp = null;
var Guestlist=["Ali", "Ahmad", "Hamza"]; 

Guestlist.unshift("Umar");
Guestlist.splice(3,0,"Moeed");
Guestlist.push("Nasir");


console.log(Guestlist);

//temp = Guestlist[1];
//Guestlist[1] = "Qasim";

document.write("Greetiings everyone, We just found a bigger table so I would like to add new participants to our dinner", "<br\>"); 
//for (var i=0; i<Guestlist.length; i++) {
    document.write("Assalam o Alaikum! ", "<br\>", "The list of attendees will be.", "<br\>", Guestlist);
//}

//document.write("Since ", temp, " wont be able to join us, so I am inviting ", Guestlist[1], " instead. <br\>");

/*document.write("Assalam o Alaikum ", Guestlist[0], ", I would like to invite you to the dinner at my place this weekend.", "<br\>");
// document.write("Assalam o Alaikum ", Guestlist[1], ", I would like to invite you to the dinner at my place this weekend.", "<br\>");
document.write("Assalam o Alaikum ", Guestlist[2], ", I would like to invite you to the dinner at my place this weekend.", "<br\>");

Guestlist[1] = "Qasim"

document.write("Assalam o Alaikum ", Guestlist[1], ", I would like to invite you to the dinner at my place this weekend.", "<br\>");
*/
