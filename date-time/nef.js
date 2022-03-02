const now =new Date();
console.log(now);
console.log(typeof now);

console.log('Year:',now.getFullYear());
console.log('Months:',now.getMonth()+1);
console.log('Day:',now.getDay())
console.log('date:',now.getDate());
console.log('hours:',now.getHours());
console.log('Minutes:',now.getMinutes());
console.log('seconds:',now.getSeconds());

console.log('timestamp:',now.getTime());

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());


