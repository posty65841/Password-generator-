// Assignment Code
let generateBtn = document.querySelector("#generate");
let lowerCaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] // lowercase options
let upperCaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] // uppercase options
let specialCharacter = [ '!', '@', '#', '$', '%', '&', '*'] //special character options
let numericNum =[ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'] //number options 

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
    
    prompt ("How Long of a password?")

    let userSelectedOptions = [];

    if(confirm("Would you like lowercase characters?")) {
        userSelectedOptions = userSelectedOptions.concat(lowerCaseAlphabet);
    }

    if(confirm("Would you like uppercase characters?")) {
        userSelectedOptions = userSelectedOptions.concat(upperCaseAlphabet);
    }

    // special

    // numeric

    // console.log(userSelectedOptions);

     
     let password = ""
     
     if (userSelectedOptions.length > 0) {
        for (let i = 0; i < 5; i++) {   //this is what prints out the actual letter 
            let randomNumber = Math.floor(Math.random()*userSelectedOptions.length); //picks random letter from the lower case alphabet
            let randomLetter = userSelectedOptions[randomNumber];        // uses random letter from the lower case alphabet 
            password += randomLetter  
   
            
           
         }
     }
      return password;
 }
generateBtn.addEventListener("click", writePassword);
