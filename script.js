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

var numbers = "2134567890"
var special = "!@#$%^&*()_+"
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
var numb= numbers.split("")
var specialChar = special.split("")
var lowerCase = lower.split("")
var upperCase = upper.split("")
  var password = ""
  var passwordText = document.querySelector("#password");

  var userChoice = parseInt(prompt('How many characters would you like your password to contain?'));
  var userChoice2 = window.confirm('Click OK if you want to use lowercase characters');
  var userChoice3 = window.confirm('Click OK if you want to use uppercase characters');
  var userChoice4 = window.confirm('Click OK if you want to use numbers');
  var userChoice5 = window.confirm('Click OK if you want to use special characters');
    var selectedChar = []
// console.log(userChoice);

/*this ask the user how they would like their password to be built*/
if (isNaN(userChoice) || userChoice < 8 || userChoice > 128 ) {
    alert("Invalid Number");
  return;
} 

if (userChoice2) {
    selectedChar = selectedChar.concat(lowerCase);
}

if (userChoice3) {
  selectedChar = selectedChar.concat(upperCase); 
}

if (userChoice4) {
  selectedChar = selectedChar.concat(numb); 
}

if (userChoice5) {
  selectedChar = selectedChar.concat(specialChar);
}
/*this generates my password based on the if statement above*/
console.log(selectedChar);
for(var i = 0; i < userChoice; i++) {
    var index = Math.floor(Math.random() * selectedChar.length);
    var computerChoice = selectedChar[index];
    console.log(computerChoice);
    password += computerChoice;
}
console.log(password);
passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
