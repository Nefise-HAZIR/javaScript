const kareAlanı = (kenar)=> kenar**2;

const sonuc=kareAlanı(6);
console.log(sonuc);



const name1=()=>{     //tek satır varsa üsteki fonk gibi yazılabilir
    return 'nefise'
}

const sonuc2=name1();
console.log(sonuc2);





// const fatura=function(urunler,vergi){
//     let toplam=0;
//     for(let i=0; i< urunler.length ;i++){
//         toplam+=urunler[i]+urunler[i]*vergi;
//     }
//     return toplam;
// }

const fatura=(urunler,vergi)=>{
    let toplam=0;
    for(let i=0; i< urunler.length ;i++){
         toplam+=urunler[i]+urunler[i]*vergi;
     }
     return toplam;
}


const sonuc3=fatura([10,20,30],0.25);
console.log(sonuc3)