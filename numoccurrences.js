const array =[1,1,2,3,4,4,3,2,5,7,6,6,5];
const  counts ={};
array.forEach(function(x){
    counts[x] = ((counts [x]||0)+ 1);
})
console.log(counts)

// in case of string

const str= "shivashankarareddy"

const count={};
for(const char of str){
    count[char]= ((count[char]||0)+1);
}
console.log(count);

// The for...of loop iterates loop

const array2 = [1,3,5,76,4,5,4,4,76,1];
function countOccurences(array){
const count ={};
for(const num of array2){
    count[num] = (count[num]||0)+1;
}

//now formating the output

for (const[key,value]of Object.entries(count)){
    console.log(`${key}:${value}`);
}
};
countOccurences(array2);


// incase of array of string 
const array1 = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const countOccurrences = (arr) => {
    return arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
};

const occurrences = countOccurrences(array1);
console.log(occurrences);
// Output: { apple: 3, banana: 2, orange: 1 }

