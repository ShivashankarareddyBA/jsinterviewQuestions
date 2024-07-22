console.log("start");

setTimeout(() => {
    console.log("cb");
}, 500);

console.log("end");
let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate +10000){
    endDate= new Date().getTime();
}

console.log( "while expaire");