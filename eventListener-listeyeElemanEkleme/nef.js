const button=document.querySelector('button');
button.addEventListener('click',()=>{
    console.log('tıklandı');
});

const liElemanları=document.querySelectorAll('li');

liElemanları.forEach(eleman =>{
    eleman.addEventListener('click',e=>{
        console.log(e);
        console.log(e.target);
        console.log('li ye tıklandı');

        e.target.style.color='blue'
    })
})

const ul=document.querySelector('ul');
// ul.remove(); bütün listeyi kaldırdı

 liElemanları.forEach(eleman =>{
     eleman.addEventListener('click',e=>{
         e.target.remove();
     })
 })

 button.addEventListener('click',()=>{
     const li=document.createElement('li');
     li.textContent='javascript';

     ul.append(li); //append sonuna ekler
    // ul.prepend(li) //başına ekler
    li.addEventListener('click',e=>{
        e.target.remove();

    })

 })
