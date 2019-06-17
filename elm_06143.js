const generateArray = (size) => {
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * 15 + 1);
  }
  return arr;
};

// Kiválasztásos rendezés
const selectSort = (arr) => {
  let min = 0; // legkisebb elem indexe
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i; j < arr.length; j++) { // min keresés
      if (arr[j] < arr[min]) {
        min = j; // Ha kisebb elemet találunk, felülírjuk a min
      }
    }
    let temp = arr[i]; // Megcseréljük a 2 tömbelemet
    arr[i] = arr[min];
    arr[min] = temp;
  }
};
let k = generateArray(10);
console.log(k);
selectSort(k);
console.log(k);
console.log('--------------------------------------------------------------');

// Beszúró rendezés
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) { // Vizsgált elem
    let temp = arr[i]; // eltároljuk, mert  vsz felül fogjuk írni
    let j = i - 1; // ciklust indítunk, amely lefelé  halad a tömbben
    while (j >= 0 && arr[j] > temp) { //
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
};

let h = generateArray(10);
console.log(h);
insertionSort(h);
console.log(h);
console.log('--------------------------------------------------------------');

// Buborék rendezés
const bubbleSort = (arr) => {
  let n = arr.length;
  for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

let l = generateArray(10);
console.log(l);
bubbleSort(l);
console.log(l);
console.log('--------------------------------------------------------------');
