//random password

function generatepass(length) {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()-_+=";
    console.log(Math.floor(Math.random()*12))
    
// console.log(uppercaseLetters.charAt(21));

  
    const allChars = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
    // console.log(allChars)
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password =password+ allChars.charAt(randomIndex);
    }
    return password;
  }
  

  const passwordLength = 4; 
  const randomPassword = generatepass(passwordLength);
  console.log(randomPassword);
  