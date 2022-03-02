const points=[20,50,90,80,30,40];

const sayac=points.reduce((value,point)=>{
    if(point>=50){
        value++;
    }
    return value;
},0)

console.log(sayac);


const students=[
    {name:'nefise',puan:90},
    {name:'ömer',puan:60},
    {name:'duygu',puan:20},
    {name:'emine',puan:40},
    {name:'ahmet',puan:70},
    {name:'nefise',puan:30}
];

const adding=students.reduce((value,student)=>{
    if(student.name=='nefise'){
        value+=student.puan
    }
    return value;
},0)

console.log(adding);