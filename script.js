// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // 1.make sure i meet generate password criteria
  // a. password legnth 8 min 128 max
  // b. options for lowercase, uppercase, numbers, and special characters
  // 2. validate the password
  // 3. generate password based on criteria
  // 4. display password

  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "~"];
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var userChoice = window.prompt('How many characters would you like your password to contain?');
  var userChoice2 = window.confirm('Click OK if you want to use lowercase characters');
  var userChoice3 = window.confirm('Click OK if you want to use uppercase characters');
  var userChoice4 = window.confirm('Click OK if you want to use numbers');
  var userChoice5 = window.confirm('Click OK if you want to use special characters');
  passwordText.value = password;
if (!userChoice) {
  return;
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
