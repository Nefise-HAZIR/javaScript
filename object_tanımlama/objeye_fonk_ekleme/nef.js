let arkadas={
    isim:'buse',
    yas:20,
    okul:'Ankara_Üniversitesi',
    bölüm:'hemşirelik',
    dersler:['matematik','kimya','coğrafya'],

    callMe:function(){
         console.log('buse called u today')               //iki kullanım da doğru
    },
    dCallMe(){
        console.log('buse did not call u today')
    },
 
 }

 arkadas.callMe();
 arkadas.dCallMe();