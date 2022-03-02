let yas=29;

console.log(yas=='29');
console.log(yas==='29');
console.log(yas==29);
console.log(yas!=='29');


let age='20';
console.log(age+1);
console.log(typeof age)

age=Number(age);
console.log(age+1);
console.log(typeof age)

let sonuc=Number('Can')
console.log(sonuc)

sonuc=String(20)
console.log(sonuc,typeof sonuc)

sonuc=Boolean(20);
console.log(sonuc,typeof sonuc)

sonuc=Boolean(0);
console.log(sonuc)

sonuc=Boolean('0'); // string ifadede herzaman true döner
console.log(sonuc)

sonuc=Boolean('');
console.log(sonuc)
