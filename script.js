// Assignment Code
let generateBtn = document.querySelector("#generate");
//variables for Users Selection
let passwordLength;
let upperCase;
let lowerCase;
let numbers; 
let specialC;
//Variables for Password Generation
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let Alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers = "0123456789";
let symbols = "!@#$%^&*()";
let finalSelect; //<--This is what the user choose after being prompted (alphabet+Alpha+allnumbers+symbols)
let finalSelectLength; //<--This is the number of characters inside of finalSelect
let randomNumber; //<--This is a number between 0 and finalSelectLength - 1)

function generatePassword() {
  finalSelect = ""; //Empty the variable to start a fresh password generation (User's selection)
  let userPassword = "";  //This is a local variable that stores the generated password.


//1. PASSWORD LENGTH FUNCTION
  //When I click the button, presented with a series of prompts for password criteria
  passwordLength = prompt("How long do you want your password? Choose 8 - 128 characters");

//While loop will make the instructions repeat if user makes a mistake.
  while (true)
  {
    //I need my cancel button to work in every scenario below.
    if (passwordLength === null) {
      return;
    }
    //If user's password length is less than 8 or more than 128, alert them and have them try again.
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Please select a number between 8 and 128.");
        passwordLength = prompt("How long do you want your password? Choose 8 - 128 characters");

        
    } 
    //This will alert user if they try to put something that's Not A Number (NaN) and have them try again.
    else if (isNaN(passwordLength)){
      alert("Please select a number.")
      passwordLength = prompt("How long do you want your password? Choose 8 - 128 characters");
    }
    //Otherwise, keep it pushin!
    else {
      break;
    }
  }
  //Console logging is just for my eyes only, to make sure my code is working.
  console.log("I want my password to have " + passwordLength + " characters.");

  //2. UPPERCASE FUNCTION
        //I use upperCase variable to ask users if they want uppercase in their password
  upperCase = prompt("Do you want uppercase letters? Choose Y or N");
  while (true) //While loop is making instructions repeat in case of user error
  {
    if (upperCase === "N" || upperCase ==="n") { //User can choose n or N and get a good response
      console.log("Your password will NOT have uppercase letters");
      break; //keep it pushin!
    }
    else if
      (upperCase === "Y" || upperCase ==="y") { //User can choose y or Y and get a good response
        console.log("Your password will have uppercase letters");
        break; //then keep it pushin!
    }
    else if  //This activates my cancel button work.
      (upperCase === null) {return;}
    else { //This happens just incase user enters something that's not Nn or Yy
       console.log(upperCase + " is not valid.");
       upperCase = prompt("Please choose Y or N");
       
    }
  }
  //3. LOWERCASE FUNCTION

  lowerCase = prompt("Do you want lowercase letters? Choose Y or N"); //Ask the user what they want.
  while (true) //Repeat just in case of error
  {
    if (lowerCase === "N" || lowerCase ==="n") { //User options
      console.log("Your password will NOT have lowercase letters");
      break;
    }
    else if
      (lowerCase === "Y" || lowerCase ==="y") { //User options
        console.log("Your password will have lowercase letters");
        break;
    }
    else if 
      (lowerCase === null) {return;} //Makes my cancel button work
    else { //If they try and put a non Nn or Yy
       console.log(lowerCase + " is not valud.");
       lowerCase = prompt("Please choose Y or N");
       
    }
  }

   //4. NUMBERS FUNCTION

  numbers = prompt("Do you want to use numbers? Choose Y or N");
  while (true)
  {
    if (numbers === "N" || numbers ==="n") {
      console.log("Your password will NOT use numbers");
      break;
    }
    else if
      (numbers === "Y" || numbers ==="y") {
        console.log("Your password will use numbers");
        break;
    }
    else if 
      (numbers === null) {return;}
    else {
        console.log(numbers + " is not valud.");
        numbers = prompt("Please choose Y or N");
        
    }
  }
 
  //5. SPECIAL FUNCTION

  specialC = prompt("Do you want to use special characters? Choose Y or N");
  while (true)
  {
    if (specialC === "N" || specialC ==="n") {
      console.log("Your password will NOT use special characters.");
      break;
    }
    else if
      (specialC === "Y" || specialC ==="y") {
        console.log("Your password will use special characters");
        break;
    }
    else if 
      (specialC === null) {return;}
    else {
      console.log(specialC + " is not valud.");
      specialC = prompt("Please choose Y or N");
      
    }
  }

  //6. Generate user's random password
  if (upperCase === "Y" || upperCase ==="y") {
    finalSelect = Alpha; //We add to finalSelect a string with the entire uppercase alphabet
  }
  if (lowerCase === "Y" || lowerCase ==="y") {
    finalSelect = finalSelect+ alphabet; //...then, we add the lowercase letters to that
  }
  if (numbers === "Y" || numbers ==="y") {
    finalSelect = finalSelect + allnumbers; //...then, we add allnumbers to that
  }
  if (specialC === "Y" || specialC ==="y") {
    finalSelect = finalSelect + symbols; //...then finally add symbols to everything I've combined above
  }
  
  finalSelectLength = finalSelect.length; //finalSelectLength is a new variable and it inclides the #ofcharacters in finalSelect
  for (var i = 0; i < passwordLength; i++) { //Looping occurs for each-&-every-character. declare variable; condition works when i is less than passwordLength; At the end of each loop, increase i by 1
    randomNumber = Math.floor(Math.random() * finalSelectLength); //This is giving us a (random) number that we will use to select a character from our finalSelect. The random number will be between 0 and finalSelectLength -1
    userPassword = userPassword + finalSelect.charAt(randomNumber); //randomNumber is used to select the position of a character of the string inside of the variable finalSelect.
  }
  return userPassword;
}
// Write password to the #password input
function writePassword() {
  let password = generatePassword();


  let passwordText = document.querySelector("#password");

  passwordText.value = password; //it gives me "Undefined" for now


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //The computer knows when I click so it'll run the writePassword function
