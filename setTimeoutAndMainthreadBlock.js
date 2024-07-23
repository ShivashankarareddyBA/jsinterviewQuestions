console.log("start");
// the call back function must have to register somewhere in the webAPI calls wheather it is an 0 milisecond also same process it will not exicute immediatly
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