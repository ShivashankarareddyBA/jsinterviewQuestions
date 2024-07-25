// const arr =[1,3,5,8,9];
//we are using map when want to create newresulting array .

const arr = [3,6,9,5];

function double (x){
    return x*2;
}

const output = arr.map(double);
console.log(output);
// triple
function triple(x){
    return x*3;
}
const output1 = arr.map(triple);

console.log(triple);

//transformer to binary 

function binary(x){
    return arr.toString(2);
}

const output2= arr.map(binary);


// filter
const arr1 =[5,1,4,6,7];
function isOdd(x){
    return x % 2;
}
const output3 = arr1.filter(isOdd)


console.log(output3);

// even

const arr2 =[5,1,4,6,7];
function isEven(x){
    return x % 2 === 0;
}
const output4 = arr2.filter(isEven)


console.log(output4);

const arr3 =[5,1,4,6,7];
function graterthan(x){
    return x > 2 ;
}
const output5 = arr3.filter(graterthan)


console.log(output5);

