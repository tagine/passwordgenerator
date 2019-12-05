
//VARIABLE DECLARATIONS//

var lowCaseList = "abcdefghijklmnopqrstuvwxyz";
var capCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numList = "0123456789";
var specialList = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var passlength = prompt("enter length of password (8-126)");

console.log("This is special list", specialList)

//REQUIREMENT PROMPTS//

var confirmLowCase = confirm("Would you like to include a lower case letter in your password?")
var confirmCapCase = confirm("Would you like to include a capital case letter in your password?")
var confirmNum = confirm("Would you like to include a number in your password?")
var confirmSpecial = confirm("Would you like to include a special character in your password?")


//REQUIREMENT CONFIRMATION CHECK//

console.log(confirmLowCase);
console.log(confirmCapCase);
console.log(confirmNum);
console.log(confirmSpecial);


var retVal = "";



// GENERATOR //

// if (confirmSpecial) {
//     var i = 0;
//     n = specialList.length; i < passlength; ++i;
//     var test = Math.floor(Math.random() * n);
//   retVal += specialList.charAt(test);
//     console.log("retVal equals", retVal);
//     console.log("n equals", n);
//     console.log("test equals", test);
//     console.log("spec list char equals", specialList.charAt(test));
// }


for (var i = 0; i < passlength; ++i) {
    retVal += lowCaseList.charAt(Math.floor(Math.random() * lowCaseList.length));
    console.log("retVal lowcase", retVal)

}

for (var i = 0; i < passlength; ++i) {
    retVal += capCaseList.charAt(Math.floor(Math.random() * capCaseList.length));
    console.log("retVal cap case", retVal)

}

for (var i = 0; i < passlength; ++i) {
    retVal += numList.charAt(Math.floor(Math.random() * numList.length));
    console.log("retVal num", retVal)

}

for (var i = 0; i < passlength; ++i) {
    retVal += specialList.charAt(Math.floor(Math.random() * specialList.length));
    console.log("retVal spec list", retVal)

}


//PRINT PASSWORD//

//document.getElementById("password").value = retVal;

//var parentDOM = document.getElementById("card-body-test");
document.getElementById("passwordDisplay").value = retVal;