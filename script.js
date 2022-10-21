// Assignment Code
let generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function getRandomItem(list) {
  return list[randomInt(0, list.length)]
}

// Generate password

function generatePassword() {

  let userInput = window.prompt("Provide the number of characters you want to include in your password! (Password length). Must be min = 8, max = 128")

  let passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("That is not a number. Please click the Generate Password button to start over!")
    return
  } else {"Thank you! That was a valid Selection!"
  }
  console.log(userInput)

  
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Your password must have minimum 8 and maximum 128 characters!")
    return
  }
  console.log(passwordLength)

  let userSelectNumbers = window.confirm("Do you wish to include Numbers in your password? [OK = Yes, Cancel = No]")
  console.log(userSelectNumbers)
  let userSelectLowerCaseLetters = window.confirm("Do you wish to include Lowercase Letters in your password? [OK = Yes, Cancel = No]")
  console.log(userSelectLowerCaseLetters)
  let userSelectUpperCaseLetters = window.confirm("Do you wish to include Uppercase Letters in your password? [OK = Yes, Cancel = No]")
  console.log(userSelectUpperCaseLetters)
  let userSelectSpecials = window.confirm("Do you wish to include Special Characters (e.g. #, ^, %) in your password? [OK = Yes, Cancel = No]")
  console.log(userSelectSpecials)

  let numberList = [1,2,3,4,5,6,7,8,9]
  let lowerCaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  let upperCaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  let specialsList = ["!","@","#","$","%","^","&","*",")","~","("]

  let optionList = []

  if (userSelectNumbers === true) {
      optionList.push(numberList)
  }

  if (userSelectLowerCaseLetters === true) {
    optionList.push(lowerCaseList)
  }

  if (userSelectUpperCaseLetters === true) {
    optionList.push(upperCaseList)
  }

  if (userSelectSpecials === true) {
    optionList.push(specialsList)
  }

  if (optionList.length === 0) {
      optionList.push(numberList)
      window.alert("No Password criteria was selected. A random default Password is generated for you!")    
  }

  let generatedPassword = ""

  for (let i = 0; i < passwordLength; i++) {

      let randomList = getRandomItem(optionList)
      let randomChar = getRandomItem(randomList)
      generatedPassword += randomChar
    }
    
    return generatedPassword



}
    

// Write password to the #password input

function writePassword() {

  // let password = generatePassword();

  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log(password)
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add eventlistener to copy info to clipboard - Generated content??

const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", (event => {

  const content = document.getElementById("password").value;
  navigator.clipboard.writeText(content);

}))


  