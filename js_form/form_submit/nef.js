const form=document.querySelector('.form');
const username=document.querySelector('#username')

form.addEventListener('submit',e=>{
    e.preventDefault(); //sayfanın yenilenmesi önlenir
    //  console.log('form gönderildi');

    //console.log(username.value);
    console.log(form.username.value)


})