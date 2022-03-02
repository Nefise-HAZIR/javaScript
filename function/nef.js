nefise();
nefise();
nefise();


function nefise(){
    console.log('nefise')
}

const a=function(){
    console.log('nefise');

}

a();  // a yı function dan önce tanımlarsak hata verir.
a();

// paremetreli func

const func=function(ad='nefise',soyad='hazır'){
    console.log(`ad soyad ${ad} ${soyad}`)
}
func();
func(`duygu`,`cort`);


// return
const kareAlanı=function(kenar){
    return kenar**2;
}
const sonuc=kareAlanı(6);
console.log(sonuc);