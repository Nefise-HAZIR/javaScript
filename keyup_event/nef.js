const form=document.querySelector('.form');
const message=document.querySelector('.message')
  const pattern=/^[a-z]{5,9}$/

form.addEventListener('click',e=>{
    e.preventDefault();
    const username=form.username.value;

  

    const sonuc=pattern.test(username)

    if(sonuc){
        message.textContent='başarılı'
    }
    else{
        message.textContent='5-10 arasında sadece kücük harf içermelidir'
    }
})


form.username.addEventListener('keyup',e=>{
    //console.log(e.target.value) //form.username.value de aynı işemi yapar
    const username=e.target.value;
    const sonuc=pattern.test(username)

    if(sonuc){
        //console.log('başarılı')
        form.username.setAttribute('class','success')

    }
    else{
        //console.log('başarısız')
        form.username.setAttribute('class','error')
    }
})