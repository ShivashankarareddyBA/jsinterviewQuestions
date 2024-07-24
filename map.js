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