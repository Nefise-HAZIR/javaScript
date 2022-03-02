const pDegeri=document.querySelector('p');
console.log(pDegeri.innerText);

pDegeri.innerText='Nefise is a student in ÇÜ';

const pDegeri2=document.querySelectorAll('p');

pDegeri2.forEach(a=>{
    console.log(a);
    a.innerText +=' yeni alan';

})

const hata=document.querySelector('.error');
console.log(hata.innerHTML);
hata.innerHTML='<h2>VUE JS, REACT JS, ANGULAR JS</h2>';


const isimler=['ömer','duygu','ahmet'];
isimler.forEach(a=>{
    hata.innerHTML+=`<h4>${a}</h4>`;

})
