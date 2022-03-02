const students=[
    {name:'nefise',puan:90},
    {name:'ömer',puan:10},
    {name:'duygu',puan:20},
    {name:'emine',puan:40},
    {name:'ahmet',puan:50}
];

const filtered=students.filter(student=>{
    return student.puan<=50;
})
const mapStudent=filtered.map(student=>{
    return `${student.name} isimli öğrencinin yeni puanı ${student.puan+10}`
})

console.log(mapStudent);

const newNotes=students.filter(student=> student.puan<=50).map(student=> `${student.name} isimli öğrencinin yeni puanı ${student.puan+10}`)
console.log(newNotes);

