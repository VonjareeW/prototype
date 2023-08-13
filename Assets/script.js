// Assignment code here


  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');

// make user selections for password content 

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialChars) {
    let password = '';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericChars = '0123456789';
    const specialChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

  
    let availableChars = '';
  
      if (includeLowercase) {
      availableChars += lowercaseChars;
    }
    if (includeUppercase) {
      availableChars += uppercaseChars;
    }
    if (includeNumbers) {
      availableChars += numericChars;
    }
    if (includeSpecialChars) {
      availableChars += specialChars;
    }
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      password += availableChars[randomIndex];
    }
    if (password.length < 8 || password.length > 128) {
      return 'The password must be within 8 to 128 characters.' ;
    }

    return password;
  }
  // prompts for user to choose from
  
 function getPasswordCriteria() {

     const length = parseInt(prompt("Enter your desired password length ranging from 8 and 128 characters"));
     const includeLowercase = confirm("Do you want to feature any lowercase letters?");
     const includeUppercase = confirm("Do you want to feature any uppercase letters?");
     const includeNumbers = confirm(" Do you want to feature any numbers?");
     const includeSpecialChars = confirm(" Do you want to feature any special characters?");
    

    // If statement to validate users input if no options are selected

    if (!(includeLowercase || includeUppercase || includeNumbers || includeSpecialChars)) {
      alert("You must choose at least one option.");
      return getPasswordCriteria();
    }
  
      return {
      length,
      includeLowercase: includeLowercase ? includeLowercase : false,
      includeUppercase: includeUppercase ? includeUppercase : false,
      includeNumbers: includeNumbers ? includeNumbers : false,
      includeSpecialChars: includeSpecialChars ? includeSpecialChars : false,
    };
  }
  
  // the generate button links the id type to what is found in the html
  
  const generateButton = document.getElementById('generate');
  generateButton.addEventListener('click', () => {
    const passwordCriteria = getPasswordCriteria();
    const generatedPassword = generatePassword(
      passwordCriteria.length,
      passwordCriteria.includeLowercase,
      passwordCriteria.includeUppercase,
      passwordCriteria.includeNumbers,
      passwordCriteria.includeSpecialChars
    );
    
    var passwordText = document.querySelector("#password");
    passwordText.value = generatedPassword;
  });
  
  
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  