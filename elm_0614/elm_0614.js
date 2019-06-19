let name = 'Feri'; //Globális

const hello = () => {
    let c = 'cica';
    console.log('Hello', name); //Funktion
};

hello('Géza');
console.log(name);
//console.log(c); //Fordítási hiba
if (name==='Feri') {
  let c=10;//Blokkon belül
}
//console.log(c); Fordítási hiba