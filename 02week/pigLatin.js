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

const isWord = (answer) => {
  if (typeof answer === 'string') {
    return true;
  } else {
    console.log('not a string')
    return 'Please enter a valid word.';
  }
}

const aVowel = ['a', 'e', 'i', 'o', 'u'];

const convertToArray = (answer) => {
  return answer.split('');
}

const startsWithVowel = (answer) => {
  return aVowel.includes(convertToArray(answer)[0]);
}
const combineArrays = (consonantArr, endOfWord) => {
  const newWord = endOfWord.concat(consonantArr);
  return newWord
} 

const pigLatinify = (answer) => {
  const arr = convertToArray(answer);
  let consonantArr = [];
  let endOfWord = [];

  for(let i = 0; i <= answer.length-1; i++) {
    // ifis a vowel
    if (aVowel.includes(arr[i])){
      // console.log(i, arr[i])
      // after the vowels, save rest of word in an array
      // i represents the position/index of the first voewl found
      endOfWord = arr.slice(i)
      // console.log(endOfWord)
      const combinedArray = combineArrays(consonantArr, endOfWord)
      // .join returns a string from an array
      return combinedArray.join('') + 'ay'

    }
    //if is a consonant, store inside of consonantArr

   consonantArr.push(arr[i])
  //  console.log(consonantArr)
  }
}

const pigLatin = (answer) => {
  if (isWord(answer)) {
    console.log(typeof answer, answer)
    if (startsWithVowel(answer)) {
      return answer + 'yay'
    } else { return pigLatinify(answer)}
  }
}


// const pigLatin = (answer) => {
//   //const array = answer.split('');

//   const vowels = ['a','e','i','o','u'];
//   let newWord = '';
//   for(let i = 0; i < vowels.length-1; i++) {

//     for(let y = 0; y < answer.length-1; y++) {
//       if(answer[y] === vowels[i]) {
//         for(let x = y; x < answer.length; x++){
//           newWord = newWord + answer[x];
//         }
//         for(let n = 0; n < y; n++){ 
//           newWord = newWord + answer[n];
//         }
//         return newWord + "ay";
//       } 
//       // } if {
//       //   return answer.split("").map(answer.slice(1) + answer[0] + 'ay').join("");
//       //   }
//     }       
//   } 
// } 

// pigLatin("apple");


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log(pigLatin(answer));
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