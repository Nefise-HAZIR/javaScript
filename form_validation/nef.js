const form=document.querySelector('.form');
const message=document.querySelector('.message')

form.addEventListener('click',e=>{
    e.preventDefault();
    const username=form.username.value;

    const pattern=/^[a-z]{5,9}$/

    const sonuc=pattern.test(username)

    if(sonuc){
        message.textContent='başarılı'
    }
    else{
        message.textContent='5-10 arasında sadece kücük harf içermelidir'
    }
})