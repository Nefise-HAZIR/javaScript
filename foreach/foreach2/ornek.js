const ulum=document.querySelector('.main');

let isimler=['nefise','duygu','selçuk','ömer'];

let html=``;

isimler.forEach(isim =>{
    html+=`<li>${isim}</li>`
})

console.log(html)

ulum.innerHTML=html;