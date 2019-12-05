
//VARIABLE DECLARATIONS//

var lowCaseList = "abcdefghijklmnopqrstuvwxyz";
var capCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numList = "0123456789";
var specialList = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var passlength = prompt("enter length of password (8-126)");

//REQUIREMENT PROMPTS//

// var confirmLowCase = confirm("Would you like to include a lower case letter in your password?")
// var confirmCapCase = confirm("Would you like to include a capital case letter in your password?")
// var confirmNum = confirm("Would you like to include a number in your password?")
var confirmSpecial = confirm("Would you like to include a special character in your password?")

//REQUIREMENT CONFIRMATION CHECK//

// console.log(confirmLowCase);
// console.log(confirmCapCase);
// console.log(confirmNum);
console.log(confirmSpecial);


// var passwordCombo = lowCaseList + capCaseList + numList + specialList


// if lowCaseChar (true) {

//     passwordCombo = lowCaseList
// }




// var number = 1 + 2 + 3 + 4


// var number = 0;
// number = number + 1;
// number = number + 2;
// number = number + 3;
// number = number + 4;



var retVal = "";


// if (lowCaseList && capCaseList && numChar && specialChar) {


// } 


// GENERATOR //

// if  (confirmLowCase){
//     alert("You asked for lowercase letters");
// }
// if (confirmCapCase) {
//     alert("You asked for cap case letters");
// }
// if (confirmNum) { 
//     alert("You asked for number characters");
// }
if (confirmSpecial) {
    alert("You asked for special characters");
}


// function generatePassword() {
//         retVal = "";
//     for (var i = 0, n = passlength.length; i < length; ++i) {
//         retVal += charset.charAt(Math.floor(Math.random() * n));
//     }
//     return retVal;
// }

// console.log("retVal equals", retVal);

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



// if ((userGuess === "r" && computerGuess === "s") ||
//             (userGuess === "s" && computerGuess === "p") || 
//             (userGuess === "p" && computerGuess === "r"))

// if (specialChar === true) {
//     console.log("in specialchar")


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

// document.getElementById("password").value = retVal;