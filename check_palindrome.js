/**
Checking Whether a word is a palindrome

a Palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or nurses run.

**/

function checkPalindome(word){
  // initialise array
  let letters = []
  // variable to store reversed word
  var rword = ""
  
  for (let i = 0; i < word.length; i++){
    //push words into array by index
    letters.push(word[i])            
  }
  
  for (let i = 0; i < word.length; i++){
     //pop words into rword by index
    rword += letters.pop(word[i])
  }
   
                         
   if(rword == word){
      console.log("Palindrome")
      
    }else{
      console.log("Not a Palindrome")
    }
                         
}

this.checkPalindrome("madam")
