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

    printLesson(){
        console.log(this)

        console.log(this.dersler)

        this.dersler.forEach(ders=>{
            console.log(ders)
        })
    }
 
 }

 console.log(this)
 arkadas.printLesson();

