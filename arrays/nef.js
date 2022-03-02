let isimler=['nefise','elif','buse'];
console.log(isimler[1]);

isimler[1]='irem'
console.log(isimler[1]);

let yaslar=[3,18,25,60];
console.log(yaslar[3]);

let rastgele=['nefise','hazır',3,12]
console.log(rastgele)
console.log(rastgele.length)

let tireli=isimler.join('-')
console.log(tireli)

let sira=isimler.indexOf('buse')
console.log(sira)

let ekle=isimler.concat(['tuğba','duygu'])
console.log(ekle)


let elemanEkle=isimler.push('leyla')
console.log(isimler)

isimler.pop()
console.log(isimler)
