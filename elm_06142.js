const fgv = (k) => { //Csak az értéket módosítjuk, az eredeti változó értéke megmarad
    k=5;
    console.log('Funktion: ', k); //5
};

let a = 10;
fgv(a);
console.log('Global: ', a); //10

const generateArray = (arr, size) => {
    for(let i = 0; i<size; i++) {
        arr[i]=Math.floor(Math.random()*11);
    }
};

let b=[];
generateArray(b, 5);
console.log(b);

