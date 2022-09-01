// Assignment Code
let generateBtn = document.querySelector("#generate");
let lowerCaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] // lowercase options
let upperCaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] // uppercase options
let specialCharacter = [ '!', '@', '#', '$', '%', '&', '*'] //special character options
let numericNum =[ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] //number options 
console.log ("abcdefg")
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

 function generatePassword(){
      

     
     let password = ""
     for (let i = 0; i <5; i++) {   //this is what prints out the actual letter 
         let randomNumber = Math.floor(Math.random()*lowerCaseAlphabet.length); //picks random letter from the lower case alphabet
         let randomLetter = lowerCaseAlphabet[randomNumber];        // uses random letter from the lower case alphabet 
         password += randomLetter  
        
      }
      return password;
 }
generateBtn.addEventListener("click", writePassword);
