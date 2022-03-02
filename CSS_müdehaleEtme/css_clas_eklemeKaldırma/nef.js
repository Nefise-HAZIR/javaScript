const icerik=document.querySelector('p');
console.log(icerik.classList);

icerik.classList.add('ömer');
icerik.classList.remove('error');


const Pdegeri=document.querySelectorAll('p');

Pdegeri.forEach(p=>{
   if(p.textContent.includes('error')) {
       p.classList.add('error');
   }
   if(p.textContent.includes('success')){
       p.classList.add('success');

   }
})