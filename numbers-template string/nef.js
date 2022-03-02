let yaricap=15;
const piSayısı=3.14;
console.log(yaricap,piSayısı);

let daireAlani=piSayısı*yaricap**2;
console.log(daireAlani)

console.log(16/4)

let kalan=yaricap%4
console.log(kalan)

let sonuc= 6*(15-4)**2;
console.log(sonuc)

let sayı=13
sayı++
sayı+=1
console.log(sayı)

//NaN not a number
console.log(15/"nefise")

//template string
const desr1="angular";
const ders2="react";
const ders3="vue";

let sonuc2=`öğrenilmesi gereken frameworkler ${desr1} ${ders2} ${ders3}`
console.log(sonuc2)

//bi de html var
let html=`
  <h1>${desr1}</h1>
  <h2>${ders2}</h2>
  <h4>${ders3}</h4>
`
console.log(html)