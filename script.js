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

// Declaring variables
// Function to prompt user for password options
function getPasswordOptions() {
  var passwordOptions = {
    passwordLength : 10,
    confirmSpecialCharacters: true,
    confirmNumbers: true,
    confirmLowerCase: true,
    confirmUpperCase: true
  };
  var noOptionPicked = true;
  while (noOptionPicked == true) {
    //Ask user to select password lenght
    passwordOptions.passwordLength = Number(prompt("How many characters do you want your password to have? Enter a number between 10 and 64"));
    // Validate answers and loop until the answer matches our criteria
    while(passwordOptions.passwordLength < 10 || passwordOptions.passwordLength > 64) {
      alert("Password length must be between 8 and 20 characters. Try again!");
      passwordOptions.passwordLength = (prompt("How many characters do you want your password to have? Enter a number between 10 and 64"));
    } 
    passwordOptions.confirmSpecialCharacters = confirm("Do you want your password to include Special Characters?");
    passwordOptions.confirmNumbers = confirm("Do you want your password to include Numbers?");
    passwordOptions.confirmLowerCase = confirm("Do you want your password to include Lowercase Characters?");
    passwordOptions.confirmUpperCase = confirm("Do you want your password to include Uppercase Characters?");
    if (passwordOptions.confirmSpecialCharacters == false && passwordOptions.confirmNumbers == false && passwordOptions.confirmLowerCase == false && passwordOptions.confirmUpperCase == false) {
      noOptionPicked = true;
      //alert prompting the user to pick at least one character category
      alert("You must pick at least one character type: special, numeric, upper case or lower case. Try again!");
    } else { 
      noOptionPicked = false;
    }
  }
  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
 return arr[Math.floor(Math.random() * arr.length)];
}
//function that shuffles characters and doesn't display them in the order they were programmed, aka special, numeric, lower case, uppercase
function shuffleCharacters(characters){
  var shuffledCharacters = '';
  characters = characters.split('');
  while (characters.length > 0) {
    shuffledCharacters +=  characters.splice(characters.length * Math.random() << 0, 1);
  }
  return shuffledCharacters;
}

// Function that generates password with the user input
function generatePassword() {
  passwordOptions = getPasswordOptions();
  console.log(passwordOptions);
  var password = "";
  //This array will contain all the character types that the user wants to use
  var selectedCharacters = [];
  if (passwordOptions.confirmSpecialCharacters == true) {
     password = password.concat(getRandom(specialCharacters));
     selectedCharacters = selectedCharacters.concat(specialCharacters);
  }
  if (passwordOptions.confirmNumbers == true) {
    password = password.concat(getRandom(numericCharacters));
    selectedCharacters = selectedCharacters.concat(numericCharacters);
  }
  if (passwordOptions.confirmLowerCase == true) {
  password = password.concat(getRandom(lowerCasedCharacters));
  selectedCharacters = selectedCharacters.concat(lowerCasedCharacters);
  }
  if (passwordOptions.confirmUpperCase == true) {
    password = password.concat(getRandom(upperCasedCharacters));
    selectedCharacters = selectedCharacters.concat(upperCasedCharacters);
  }
  for (var i = password.length; i < passwordOptions.passwordLength; i++) {
    password = password.concat(getRandom(selectedCharacters));
  }
  //Checking the minimally accepetd temporary password before randomizing characters
  
  console.log(password);
  return "This is your password: \n ".concat(shuffleCharacters(password));
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


