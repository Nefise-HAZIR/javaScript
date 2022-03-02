const points=[20,10,30,60,80];

const newPoints=points.map(point=>{
    return point+15;
})
console.log(newPoints);

const students=[
    {name:'nefise',puan:90},
    {name:'ömer',puan:60},
    {name:'duygu',puan:20},
    {name:'emine',puan:40}
]

const newPuan=students.map(point=>{
    if(point.puan<50){
        point.puan+=10;
        return point;
    }
    else{
        return point;
    }
})
console.log(newPuan)

