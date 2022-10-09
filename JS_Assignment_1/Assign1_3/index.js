//////////////////////////////////////////////////////////
/*------------------------------------------------------//
//--Getting Started Exercises with Javascript & Node.js-//
//--3. Name Cases---------------------------------------//
//------------------------------------------------------//
//------------------------------------------------------//
//------------------------------------------------------*/
//////////////////////////////////////////////////////////

var MyName = "danIal Saleemi"


var Lower_Case = MyName.toLowerCase();
var Upper_Case = MyName.toUpperCase();

function titleCase (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(' ');
}
var Title_Case = titleCase(MyName);

document.write("Lower Case: ", Lower_Case, "<br\>");
document.write("Upper Case: ", Upper_Case, "<br\>");
document.write("Title Case: ", Title_Case);
