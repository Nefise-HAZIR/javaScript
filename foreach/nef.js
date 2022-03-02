const a=(callBacka)=>{
    let yas=30;
    callBacka(yas);
};
a(function(value){
    console.log(value)
})

let isimler=['nefise','duygu','selçuk','ömer'];

isimler.forEach(function(){
    console.log('selam')
})

isimler.forEach(function(kisi){
    console.log(kisi)
})

isimler.forEach(function(kisi,index){
    console.log(kisi,index)
})

const isim=(kisi,index)=>{
    console.log(`${kisi}-${index}`)
}

isimler.forEach(isim)