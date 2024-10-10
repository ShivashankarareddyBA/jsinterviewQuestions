let name= {
    firstName: "shiva",
    lastName: "reddy"
}

let printName = function(){
    console.log(this.firstName +" " + this.lastName)
}

 let printMyname = printName.bind(name);
printMyname();


Function.prototype.myBind= function(...args){
        // 'this' refers to the function on which myBind is called

    let fun =this;
        // 'args[0]' is the context, 'restArgs' are the arguments passed to the bound function

    let context=args[0];
    let restArgs= args.slice(1);

    return function(...newArgs){
                // Call the function with the correct context and arguments

                return fun.apply(context,[...restArgs,...newArgs ]);

    };
};

let printMyName2 = printName.myBind(name);
printMyName2();

// you can also pass additonal args as below


// let name= {
//     firstName: "shiva",
//     lastName: "reddy"
// }

// let printName = function(city, state,pin){
//     console.log(this.firstName +" " + this.lastName, city,state,pin)
// }

//  let printMyname = printName.bind(name);
// printMyname( "bangalor","karnnataka","5731");


// Function.prototype.myBind= function(...args){
//         // 'this' refers to the function on which myBind is called

//     let fun =this;
//         // 'args[0]' is the context, 'restArgs' are the arguments passed to the bound function

//     let context=args[0];
//     let restArgs= args.slice(1);

//     return function(...newArgs){
//                 // Call the function with the correct context and arguments

//                 return fun.apply(context,[...restArgs,...newArgs ]);

//     };
// };

// let printMyName2 = printName.myBind(name);
// printMyName2( "bangalor","karnnataka","5731");