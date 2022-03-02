const name=['nefise','ahmet','ömer','can'];
name.sort();
console.log(name);
name.reverse();
console.log(name);


const students=[
    {name:'nefise',puan:90},
    {name:'ömer',puan:60},
    {name:'duygu',puan:20},
    {name:'emine',puan:40},
    {name:'ahmet',puan:70}
];

students.sort((a,b) =>{   //a.puan-b.puan  bu kısa yol bu kullanılır
    if(a.puan>b.puan){
        return -1;
    }
    else if(b.puan>a.puan){
        return 1;
    }
    else{
        return 0;
    }
})

console.log(students);


const puan=[40,90,22,10,80,45,72,100];

puan.sort((a,b)=> a-b);
console.log(puan);