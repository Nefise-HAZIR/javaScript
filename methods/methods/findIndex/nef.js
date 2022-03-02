const point=[50,40,90,77,10];

const arrayIndex=point.findIndex(e=>{
    if(e==90){
        return e;
    }
})
point[arrayIndex]=100;
console.log(point);

const students=[
    {name:'nefise',puan:90},
    {name:'ömer',puan:60},
    {name:'duygu',puan:20},
    {name:'emine',puan:40},
    {name:'ahmet',puan:70}
];

const objectIndex=students.findIndex(student => student.name=='duygu');

students[objectIndex].puan=50;
console.log(students);