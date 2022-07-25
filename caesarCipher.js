// Write a function that takes a message and an increment
//  amount and outputs the same letters shifted by that
//  amount in the alphabet.Assume lowercase and no punctuation.
//  Preserve spaces.


/*
Psuedocode:


*/

let caesarCipher = (string, num) => {

  let lettersArr = 'abcdefghijklmnopqrstuvwxyz';
  let lettersObj = {}
  for(let i=0; i < lettersArr.length; i++){
    lettersObj[lettersArr[i]] = i;
  }
  console.log(lettersObj)
  let encoded = '';

  for(let i = 0 ; i < string.length; i ++ ){
    if(string[i]===' '){
      encoded += ' ';
      continue;
    }
    encoded += lettersArr[(lettersObj[string[i]] + num) %26]

  }

return encoded;
}
console.log(caesarCipher('hel lo', 12))
