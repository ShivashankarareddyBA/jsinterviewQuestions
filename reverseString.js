let str="HANUMAN";
console.log(str.split("").reverse().join(""));

let str1 = "Hello, World!";
let firstChar = str1[0]; // 'H'
let fifthChar = str1[4]; // 'o'
console.log(firstChar);
console.log(fifthChar);


// js every method
const amcCollage=[{roll:7, marks:60},
    {roll:5, marks:90},
    {roll:2, marks:50},
    {roll:10, marks:80}];
    
    // check if all students are passed
    // if all students are passed then print true else false
    
    const passing_marks=35;
    const isAllPass=amcCollage.every((student)=>{
    return student.marks >= passing_marks;
     }) ;
    console.log (isAllPass);