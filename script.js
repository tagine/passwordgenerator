
//VARIABLE DECLARATIONS//

var lowCaseList = "abcdefghijklmnopqrstuvwxyz";
var capCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numList = "0123456789";
var specialList = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var passlength = prompt("enter length of password (8-12)");
console.log(passlength);

var retVal = "";

var lowCaseChar = confirm("Would you like to include a lower case letter in your password?")
var capCaseChar = confirm("Would you like to include a capital case letter in your password?")
var numChar = confirm("Would you like to include a number in your password?")
var specialChar = confirm("Would you like to include a special character in your password?")

console.log(specialChar);

// var numericChar = prompt("Enter a numeric character")

// var lowercaseChar = prompt("Enter a lowercase character")

// var uppercaseChar = prompt("Enter an uppercase character")

//alert(specialChar+numericChar+lowercaseChar+uppercaseChar)


// GENERATOR //
if (specialChar === true) {
    console.log("in specialchar")

    for (var i = 0, n = lowCaseList.length; i < passlength; ++i) {
        retVal += lowCaseList.charAt(Math.floor(Math.random() * n));
        console.log(retVal)

    }
}
else if (var i = 0, n = capCaseList.length; i < passlength; ++i) {
    retVal += capCaseList.charAt(Math.floor(Math.random() * n));
    console.log(retVal)

    }

}
else if (var i = 0, n = numList.length; i < passlength; ++i) {
    retVal += numList.charAt(Math.floor(Math.random() * n));
    console.log(retVal)

    }

}
else if (var i = 0, n = specialList.length; i < passlength; ++i) {
    retVal += specialList.charAt(Math.floor(Math.random() * n));
    console.log(retVal)

    }
}

//PRINT PASSWORD//

document.getElementsByTagName("textarea").innerHTML = password"






