
//VARIABLE DECLARATIONS//

var lowCaseList = "abcdefghijklmnopqrstuvwxyz";
var capCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numList = "0123456789";
var specialList = "#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var passlength = prompt("enter length of password (8-126)");
var passlengthInt = parseInt(passlength);

//console.log("This is special list", specialList)

//REQUIREMENT PROMPTS//

var confirmLowCase = confirm("Would you like to include a lower case letter in your password?")
var confirmCapCase = confirm("Would you like to include a capital case letter in your password?")
var confirmNum = confirm("Would you like to include a number in your password?")
var confirmSpecial = confirm("Would you like to include a special character in your password?")


//REQUIREMENT CONFIRMATION CHECK//

//console.log(confirmLowCase);
//console.log(confirmCapCase);
//console.log(confirmNum);
//console.log(confirmSpecial);


var retVal = "";

var retValCombo="";



// GENERATOR //

for (var i = 0; i < passlengthInt; ++i) {
    retVal += lowCaseList.charAt(Math.floor(Math.random() * lowCaseList.length));
    console.log("retVal lowcase", retVal)

}

for (var i = 0; i < passlengthInt; ++i) {
    retVal += capCaseList.charAt(Math.floor(Math.random() * capCaseList.length));
    console.log("retVal cap case", retVal)

}

for (var i = 0; i < passlengthInt; ++i) {
    retVal += numList.charAt(Math.floor(Math.random() * numList.length));
    console.log("retVal num", retVal)

}

for (var i = 0; i < passlengthInt; ++i) {
    retVal += specialList.charAt(Math.floor(Math.random() * specialList.length));
    console.log("retVal spec list", retVal)

}

// THIS KEEPS CRASHING MY BROWSER, WHY//

for (var i = 0; i < passlengthInt; ++i) {
    retValCombo += retVal.charAt(Math.floor(Math.random() * retVal.length));
    console.log("this is retval combo", retValCombo)

}


//PRINT PASSWORD//

document.getElementById("passwordDisplay").value = retValCombo;