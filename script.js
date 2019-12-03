
//VARIABLE DECLARATIONS//

var smallLetters = "abcdefghijklmnopqrstuvwxyz";
var capletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num ="0123456789";
var specialList = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var passlength=prompt("enter length of password (8-12)");
console.log(passlength)

var retVal = "";

var specialChar = confirm("Do you need special char to be your passowrd?")
console.log(specialChar);
// var numericChar = prompt("Enter a numeric character")

// var lowercaseChar = prompt("Enter a lowercase character")

// var uppercaseChar = prompt("Enter an uppercase character")

//alert(specialChar+numericChar+lowercaseChar+uppercaseChar)


// GENERATOR //
if(specialChar === true){
console.log("in specialchar")

for (var i = 0, n = specialList.length; i < passlength; ++i) {
    retVal += specialList.charAt(Math.floor(Math.random() * n));
console.log(retVal)
   
}
}
else if (){


}else if (){

}else if(){

}

//PRINT PASSWORD//

document.getElementById("p1").innerHTML = "hey this is me"






