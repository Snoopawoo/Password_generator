// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// Function to prompt user for password options
// Called in generatePassword function

function getPasswordOptions() {
  var pwdLength = prompt("Set the length of password (10 to 64 characters):");

  // Test for valid password length and ask for optios if valid, stop if invalid

  if(pwdLength < 10 || pwdLength > 64){
    alert("Incorrect Length input! Please refresh the page or press generate again!")
    }
    else{
  var specialTrue = confirm("Would you like to include special characters?");
  var numTrue = confirm("Would you like to include numeric characters?");
  var lowerCaseTrue = confirm("Would you like to include lowercase characters?");
  var upperCaseTrue = confirm("Would you like to include uppercase characters?");
  var charSet =[];
  // Decides to add special characters or not
if(specialTrue === true){
  for(i = 0; i < specialCharacters.length; i++){
  charSet = charSet + specialCharacters[i];
  }
};
// Decides to add numeric characters or not
if(numTrue === true){
  for(i = 0; i < numericCharacters.length; i++){
  charSet = charSet + numericCharacters[i];
  }
};
// Decides to add lower case characters or not
if(lowerCaseTrue === true){
  for(i = 0; i < lowerCasedCharacters.length; i++){
  charSet = charSet + lowerCasedCharacters[i];
  }
};
// Decides to add upper case characters or not
if(upperCaseTrue === true){
  for(i = 0; i < upperCasedCharacters.length; i++){
  charSet = charSet + upperCasedCharacters[i];
  }
};
}
// Alerts to reset if no character sets were choosen
if(charSet.length === 0){
  alert("Refresh or press generate and Choose at least one character set!");
}
return [pwdLength, charSet];
}

// Function for getting a random element from an array
// Called in generatePassword function

function getRandom(set) {
  var plength = set.length;
  var index = Math.floor(Math.random() * plength);
  var randomChoice = set[index];
  return randomChoice
}

// Function to generate password with user input
// Called in writePassword function

var generatedpassword = [];
function generatePassword() {

  // Declaring values to be used in the loop
  var userinput = getPasswordOptions();
  var lengthinfo = userinput[0];
  var usablecharactrs = userinput[1];

// Loop that picks random characters base on the length input
for(i = 0; i < lengthinfo; i++){
    randomChoice = getRandom(usablecharactrs);
    generatedpassword.push(randomChoice);
};
// Joins the values from the loop
var password = generatedpassword.join(``);
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
// Called in eventlist
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
//generateBtn.addEventListener('click',getPasswordOptions, writePassword);
generateBtn.addEventListener('click', writePassword);