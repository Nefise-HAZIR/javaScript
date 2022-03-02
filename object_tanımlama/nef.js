let arkadas={
   isim:'buse',
   yas:20,
   okul:'Ankara_Üniversitesi',
   bölüm:'hemşirelik',
   dersler:['matematik','kimya','coğrafya']

}
console.log(arkadas)
console.log(arkadas.yas);
console.log(arkadas['bölüm'])

arkadas.yas=22;
console.log(arkadas.yas);
arkadas['bölüm']='tıp'

console.log(arkadas['bölüm'])


console.log(typeof arkadas)


