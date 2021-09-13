// Assignment code here
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbols = ['!', '#', '$', '%', '&', '*', '+', '-', '/', ':', ';', '<', '=', '>', '?', '^', '_', '`', '{', '|', '}', '~', ')', '('];

function userInput() {
  var passLength =  parseInt(prompt("Enter Desired Password Length. Min 8 Characters and 128 Max."));

  if (passLength < 8 || passLength > 128) {
    alert("Make sure password has between 8 and 128 characters");
    return;
  }

  var confirmUppercase = confirm("Have Password Contain Uppercase Letters?");
  var confirmLowercase = confirm("Have Password Contain Lowercase Letters?");
  var confirmNumbers = confirm("Have Password Contain Numbers?");
  var confirmSpecial = confirm("Have Password Contain Special Characters?");

  if (confirmUppercase === false && confirmLowercase === false && confirmNumbers === false && confirmSpecial === false) {
    alert("Must choose at least one character type");
    return;
  }

  var userOptions = {
    passLength: passLength,
    confirmUppercase: confirmUppercase,
    confirmLowercase: confirmLowercase,
    confirmNumbers: confirmNumbers,
    confirmSpecial: confirmSpecial
  }

  return userOptions;

}

function randomChar(array) {
  //Math.floor
}

function generatePassword() {
  var passwordInput = userInput();

  var result = [];

  var possibleChar = [];

  var guaranteedChar = [];

  if (passwordInput.confirmUppercase){
    possibleChar = possibleChar.concat(uppercase);
    guaranteedChar.push(randomChar(uppercase))
  }

  if (passwordInput.confirmLowercase){
    possibleChar = possibleChar.concat(lowercase);
    guaranteedChar.push(randomChar(lowercase))
  }

  if (passwordInput.confirmNumbers){
    possibleChar = possibleChar.concat(Numbers);
    guaranteedChar.push(randomChar(Numbers))
  }

  if (passwordInput.confirmSpecial){
    possibleChar = possibleChar.concat(Symbols);
    guaranteedChar.push(randomChar(Symbols))
  }

  // for loop passwordInput.length -> use your random punction --> push to result []

  for (var i=0; i <= passwordInput.length; i++) {
    var possibleChar = randomFunction(possibleChar));
    result.push(possibleChar);
  }


  // for loop guaranteedChar 
  // result[i] = guaranteedChar[i]

  return result.join('');

  //read about push concat and join methods

  
  var passwordDisplayed;
  console.log(passwordDisplayed);

  }
}

  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");



  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
