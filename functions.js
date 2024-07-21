

//anonynoums functions
// function (){
    
// } => it will throw an syntax error function statement must be named

//function statement / declaration  
function a (){
    console.log("Wellcome to JavaScript");
}
a();
//function expression 

var b= function(){
console.log("b is called")}
b();

//difference between arguments and parameters
//when you passing an identifier in to a function is called parameters
//when you passing values into functions is calle arguments 

const c = function(parm1, parm2){
    console.log("c is called");
    console.log("parm1:", parm1);
    console.log("parm2:", parm2);
}
c(1, 2);

/////////
function fetch(){
    a =7;
    console.log(a)
    
}
fetch();
let a;