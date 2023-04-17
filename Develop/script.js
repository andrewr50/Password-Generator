// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let generatedPassword = '';

  const length = getLength();
  const upper = getUpper();
  const lower = getLower();
  const number = getNumber();
  const symbol = getSymbol();

  for(let i = 0; i < length; i++) {
    if (number) {
      generatedPassword += getRandomNumber();
    } 
    if (symbol) {
      generatedPassword += getRandomSymbol();
    }
    if(upper) {
    generatedPassword += getRandomUpper();
    }
    if(lower) {
      generatedPassword += getRandomLower();
    }
    console.log(generatedPassword);
  }
  
  const finalPassword = generatedPassword.slice(0, length);

  console.log(finalPassword);
  
  return finalPassword;
}

function getLength() {
  let passLength = parseInt(prompt('Password Length:', '(8-128)'), 16);
  console.log(passLength)
  if (typeof passLength === 'number' && passLength >= 8 && passLength <= 128) {
    return passLength;
  }
  else {
    alert('That is not a valid input. Please try again.')
    return getLength();
  }
}

function getUpper() {
  let res = prompt('Include upper case letters?', '(Y-N)');
  res = res.toUpperCase();
  if (res === 'Y') return true;
  else if (res === 'N') return false;
  else {
    alert('That is not a valid input. Please try again.')
    return getUpper();
  }}

function getLower() {
  let res = prompt('Include lower case letters?', '(Y-N)');
  res = res.toUpperCase();
  if (res === 'Y') return true;
  else if (res === 'N') return false;
  else {
    alert('That is not a valid input. Please try again.')
    return getLower();
  }}

function getNumber() {
  let res = prompt('Include numbers?', '(Y-N)');
  res = res.toUpperCase();
  if (res === 'Y') return true;
  else if (res === 'N') return false;
  else {
    alert('That is not a valid input. Please try again.')
    return getNumber();
  }}

function getSymbol() {
  let res = prompt('Include symbols?', '(Y-N)');
  res = res.toUpperCase();
  if (res === 'Y') return true;
  else if (res === 'N') return false;
  else {
    alert('That is not a valid input. Please try again.')
    return getSymbol();
  }}

  function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() *26) + 65)
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
