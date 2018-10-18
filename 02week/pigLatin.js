'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  // if string entered, continue 
  // else, ask for a word
  // convert each letter of a string into an array with Array.from()
  // if word starts with a vowell, return word plus 'yay'
  // if word starts with a consonant, shift index position 1 of array and pop onto end and add 'ay'
  //

// const isWord = (answer) => {
//   if (typeof answer == typeof string) {return true;
//   } else {
//     return 'Please enter a valid word.';
//   } 
// }
  
// const aVowel = 'a' || 'e' || 'i' || 'o' || 'u';

// const convertToArray = (answer) => {
//   return answer.split('');
// }

// const startsWithVowel = () => { return convertToArray[0] == aVowel; 
// }

// const pigLatin = (answer) => {if (isWord(answer)==true) {
//   if (startsWithVowel()==true) {
//     return answer + 'yay'}
// }
// }

const pigLatin = (answer) => {
  //const array = answer.split('');

  const vowels = ['a','e','i','o','u'];
  let newWord = '';
  for(let i = 0; i < vowels.length-1; i++) {

    for(let y = 0; y < answer.length-1; y++) {
      if(answer[y] === vowels[i]) {
        for(let x = y; x < answer.length; x++){
          newWord = newWord + answer[x];
        }
        for(let n = 0; n < y; n++){ 
          newWord = newWord + answer[n];
        }
        return newWord + "ay";
      } 
      // } if {
      //   return answer.split("").map(answer.slice(1) + answer[0] + 'ay').join("");
      //   }
    }       
  } 
} 

pigLatin("apple");


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
