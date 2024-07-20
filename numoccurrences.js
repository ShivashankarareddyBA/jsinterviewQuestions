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