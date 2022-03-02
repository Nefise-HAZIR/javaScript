const link=document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href','https://www.kahvedunyasi.com/')
link.textContent='Kahve Dünyası';

const hata=document.querySelector('p');
console.log(hata.getAttribute('class')) ;
hata.setAttribute('class','error');
hata.setAttribute('style','color:green');