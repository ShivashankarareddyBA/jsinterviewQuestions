// let name ={
//     firstName: "shiva",
//     lastName:"B A"
// };
// let name2 ={
//     firstName: "shankar",
//     lastName:"Reddy"
// };

// let printName = function (){
//     console.log(this.firstName,this.lastName);
// };
// let printMyName= printName.bind(name);

// printMyName();


// let printMyname2 = printName.bind(name2);

// printMyname2();
// will see with additional parms in bind method 

let name ={
    firstName: "shiva",
    lastName:"B A"
};
let name2 ={
    firstName: "shankar",
    lastName:"Reddy"
};

let printName = function (city, state, country){
    console.log(this.firstName,this.lastName, city,state,country);
};
let printMyName= printName.bind(name,  "banglore", "karnnataka", "india");

printMyName();


let printMyname2 = printName.bind(name2, "banglore", "karnnataka", "india");

printMyname2();

/// apply method
// in apply method immediately invokes the function, you don't need to store the result in a variable or call it again.
// The apply method is used to call the printName function with a specified this context (name1 or name3) and an array of arguments (["banglore", "karnnataka", "india"]).

let name1 ={
    firstName: "shiva",
    lastName:"B A"
};
let name3 ={
    firstName: "shankar",
    lastName:"Reddy"
};

let printName1 = function (city, state, country){
    console.log(this.firstName,this.lastName, city,state,country);
};
printName1.apply(name1,  ["banglore", "karnnataka", "india"]);

 printName1.apply(name3, ["banglore", "karnnataka", "india"]);

// now call method 
// in call method no need to be pass array list of aruments rather directly passing in refernce which points to inside method

let name5 ={
    firstName: "shiva",
    lastName:"B A"
};
let name6 ={
    firstName: "shankar",
    lastName:"Reddy"
};

let printName7 = function (city, state, country){
    console.log(this.firstName,this.lastName, city,state,country);
};
printName1.call(name5,  "banglore", "karnnataka", "india");

 printName1.call(name6, "banglore", "karnnataka", "india");

