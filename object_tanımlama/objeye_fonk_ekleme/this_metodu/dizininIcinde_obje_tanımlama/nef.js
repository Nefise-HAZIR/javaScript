let arkadas={
    isim:'buse',
    yas:20,
    okul:'Ankara_Üniversitesi',
    bölüm:'hemşirelik',
    dersler:[
    {isim:'matematik', puan:90},
    {isim:'kimya' ,puan:80},
    {isim:'coğrafya', puan:70},],

    callMe:function(){
         console.log('buse called u today')               //iki kullanım da doğru
    },
    dCallMe(){
        console.log('buse did not call u today')
    },

    printLesson(){
        

        this.dersler.forEach(ders=>{
            console.log(ders.isim,ders.puan)
        })
    }
 
 }

 arkadas.printLesson();