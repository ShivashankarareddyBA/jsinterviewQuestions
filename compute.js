
// remove 0 from input
const input0 = {
    A: (a, b, c) => a + b + c,
    B: (a, b, c) => a - b - c,
    C: (a, b, c) => a + b * c,
    D: {
        E: (a, b, c) => a + b + c
    }
};

function compute(a, b, c) {
    const result = {};

    for (const key in input) {
        if (typeof input[key] === 'function') {
            result[key] = input[key](a, b, c);
        } else if (typeof input[key] === 'object') {
            result[key] = {};
            for (const innerKey in input[key]) {
                if (typeof input[key][innerKey] === 'function') {
                    result[key][innerKey] = input[key][innerKey](a, b, c);
                }
            }
        }
    }

    return result;
}

console.log(compute(1, 1, 1));
// Output: { A: 3, B: -1, C: 2, D: { E: 3 } }
// const input = { ... };: This line defines a constant object named input.
// A: (a, b, c) => a + b + c: This defines a property A in the input object, with its value being a function that takes three parameters a, b, and c, and returns their sum.
// B: (a, b, c) => a - b - c: This defines a property B in the input object, with its value being a function that takes three parameters a, b, and c, and returns the result of a minus b minus c.
// C: (a, b, c) => a + b * c: This defines a property C in the input object, with its value being a function that takes three parameters a, b, and c, and returns the result of a plus b times c.
// D: { E: (a, b, c) => a + b + c }: This defines a nested object D in the input object. Inside D, there is a property E which is a function that takes three parameters a, b, and c, and returns their sum.
// function compute(a, b, c) { ... }: This defines a function named compute that takes three parameters a, b, and c.
// const result = {};: This initializes an empty object named result which will store the computed results.
// for (const key in input) { ... }: This starts a loop that iterates over each key in the input object.
// if (typeof input[key] === 'function') { ... }: This checks if the value associated with the current key is a function.
// result[key] = input[key](a, b, c);: If it is a function, it calls the function with a, b, and c as arguments, and stores the result in the result object under the same key.
// else if (typeof input[key] === 'object') { ... }: This checks if the value associated with the current key is an object (which means it's a nested object).
// result[key] = {};: Initializes an empty nested object in result under the current key.
// for (const innerKey in input[key]) { ... }: This starts another loop that iterates over each key in the nested object.
// if (typeof input[key][innerKey] === 'function') { ... }: Checks if the value associated with the current inner key is a function.
// result[key][innerKey] = input[key][innerKey](a, b, c);: If it is a function, it calls the function with a, b, and c as arguments, and stores the result in the nested object in result.
// return result;: This returns the result object, which now contains the results of all function calls.
// console.log(compute(1, 1, 1));: This calls the compute function with arguments 1, 1, and 1, and logs the returned result to the console.
// // Output: { A: 3, B: -1, C: 2, D: { E: 3 } }: This is the expected output. The result object contains the results of all function calls, where:
// A: 1 + 1 + 1 = 3
// B: 1 - 1 - 1 = -1
// C: 1 + 1 * 1 = 2
// D: { E: 1 + 1 + 1 = 3 }
// This step-by-step explanation shows how the compute function processes the input object, calls the functions with the provided arguments, and stores the results in a structured manner.



//================================== another way of doing 

const input1 = {
    A: (a, b, c) => a + b + c,
    B: (a, b, c) => a - b - c,
    C: (a, b, c) => a + b * c,
    D: {
        E: (a, b, c) => a + b + c,
        F: (a, b, c) => a * b * c
    }
};

// Function to process each key
const processKey = (key, value, args) => {
    if (typeof value === 'function') {
        return value(...args);
    } else if (typeof value === 'object') {
        return computeRecursive(value, ...args);
    }
    return null; // in case of unexpected type
};

// Recursive function to handle nested objects
const computeRecursive = (obj, ...args) => {
    const result = {};
    for (const key in obj) {
        result[key] = processKey(key, obj[key], args);
    }
    return result;
};

function compute(a, b, c) {
    return computeRecursive(input1, a, b, c);
}

console.log(compute(1, 1, 1));
// Output: { A: 3, B: -1, C: 2, D: { E: 3, F: 1 } }


//==========================

//another way of writing this code is


const input = {
    A : (a,b,c) => a+b+c,
    B : (a,b,c) => a-b-c,   
    C : (a,b,c) => a*b-c,  
    D : {E : (a,b,c) => a*b*c },   
   }
   
   const compute =(input,a,b,c)=>{
       const temp = {}
       for(let i in input){
           const key = input[i]
           if(typeof key ==='object'){
               temp[i] = compute(key,a,b,c)
           }else{
               const val = key(a,b,c)
               temp[i] = val
           }
       }
       return temp
   }
   
   console.log(compute(input ,1,1,1));

   // another way 

//    const input = {
//     A : (a,b,c) => a+b+c,
//     B : (a,b,c) => a-b-c,   
//     C : (a,b,c) => a*b-c,  
//     D : {E : (a,b,c) => a*b*c },   
//    }
   
//    const compute =(input,a,b,c)=>{
//        const temp = {}
//        for(let i in input){
//            const key = input[i]
//            if(typeof key ==='object'){
//                temp[i] = compute(key,a,b,c)
//            }else{
//                const val = key(a,b,c)
//                temp[i] = val
//            }
//        }
//        return temp
//    }
   
//    console.log(compute(input ,1,1,1))