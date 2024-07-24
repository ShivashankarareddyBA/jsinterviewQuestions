const arr1 = ["ssr", "sr", "ssr", "shankar"];
const arr2 = ["rrr", "ssss", "xx", "yy"];

const mergedandRemoveduplicate = (arr1, arr2) => {
    const mergedArray = [...arr1, ...arr2];
    const uniqueArray = [...new Set(mergedArray)];
    return uniqueArray; // Return the unique array
}

console.log(mergedandRemoveduplicate(arr1, arr2));