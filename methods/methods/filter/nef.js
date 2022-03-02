const puans=[40,60,20,30,70,90];

const studentPassed=puans.filter(puan=>{
    return puan>50;
})
console.log(studentPassed);


const student=[
{ad:'nefise',passed:true},
{ad:'duygu',passed:false},
{ad:'elif',passed:true},
{ad:'ömer',passed:false}
];

const studentP=student.filter(point=>{
    return point.passed;
})
console.log(studentP)