let readline = require('readline-sync');
let dictionary = ['alma', 'korte', 'banan', 'szilva', 'barack', 'dinnye', 'eper', 'malna', 'ribizli', 'egres'];
let num = Math.floor(Math.random() * 10);
let word = dictionary[num];
let arr = word.split('');
let guessedWord = [];
let life = Math.round((arr.length) / 2);

const szep = (arr) => {
  let szoveg = '';
  for (let i = 0; i < arr.length; i++) {
    szoveg += arr[i] + ' ';
  }
  return szoveg;
};
const equal = (arr1, arr2) => {
  let rs = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      rs = false;
      break;
    } else {
      rs = true;
    }
  }
  return rs;
};
for (let i = 0; i < arr.length; i++) {
  guessedWord[i] = '_';
}

while (life > 0) {
  console.log(szep(guessedWord));
  console.log('Még ' + life + ' tipped van');
  let letter = readline.keyIn('Guess a letter! ');
  if (letter === 'q') {
    console.log('Kiléptél!');
    process.exit();
  }

  let tf = false;
  for (let j = 0; j < arr.length; j++) {
    if (letter === arr[j]) {
      guessedWord[j] = arr[j];
      tf = true;
    }
  }
  if (tf === false) {
    life--;
  }
  if (equal(guessedWord, arr) === true) {
    console.log(szep(guessedWord));
    console.log('You did it!!!');
    process.exit();
  }
  if (life === 0) {
    console.log('Game over!!!');
    process.exit();
  }
}
