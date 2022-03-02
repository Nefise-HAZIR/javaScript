const startDate=new Date('07/17/2001 10:00:00');
const now=new Date();
console.log(startDate);

const different=now.getTime()-startDate.getTime();
console.log(different);

const hours=Math.round(different/1000/60/60);
const day=Math.round(hours/24);
const year=Math.round(day/365);

console.log(`ben ${hours} saat önce dünyaya geldim`);
console.log(`ben ${day} gün önce dünyaya geldim`);
console.log(`ben ${year} yaşındayım`);

const timestamp=now.getTime();
console.log(new Date(timestamp));
