//call functions means we can take a function an pass it in to an another function as an argument is called callback
//call back function are very power full class in js

setTimeout(function (){
    console.log("timer has been called")
},5000);

function x(y){
    console.log("x");
    y()
}
x(function y(){
    console.log('y')
});