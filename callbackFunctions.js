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

//addEventListener with clouser

function attachEventListener(){
    count=0;
    document.getElementById("clickMe").addEventListener("click",function xyz(){
        console.log("Buttonclicked", ++ count)
    })

}
attachEventListener();


//tricky interview questions

console.log(2==2);
console.log(2==2==2);
console.log(2==2==2==0);
// join below two arrys
const num=[1,2,3];
const fruits= ['🍌','🍍','🥭']; 

//const finalarray=[num, fruits];//out put [ [ 1, 2, 3 ], [ '🍌', '🍍', '🥭' ] ] but need exactly elements within one array

const finalarray=[...num, ...fruits]; //out put [  1, 2, 3 ,  '🍌', '🍍', '🥭' ] 
console.log(finalarray);


