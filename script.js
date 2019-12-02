
//VARIABLE DECLARATIONS//

var specialChar = prompt("Enter a special character")

var numericChar = prompt("Enter a numeric character")

var lowercaseChar = prompt("Enter a lowercase character")

var uppercaseChar = prompt("Enter an uppercase character")

alert(specialChar+numericChar+lowercaseChar+uppercaseChar)


// GENERATOR //

function* gen() { 
    yield 1;
    yield 2;
    yield 3;
  }
  
  var g = gen(); // "Generator { }"


