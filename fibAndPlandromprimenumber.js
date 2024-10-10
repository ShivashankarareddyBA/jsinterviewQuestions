// function fibonacci (n){
//     let fib=[0,1];
    
//     for( let i =2; i<= n; i++){
//         fib[i]= fib[i-1]+ fib[i-2];
//     }
//     return fib.slice(0,n+1);
    
// }

// let fiboseries= 50;
//  fiboseries =fibonacci(fiboseries) ;
//  console.log(fiboseries);

function fibonacci(n) {
    let fib = [0, 1];
  
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n + 1);
  }
  
  let fiboseries = 20;
  fiboseries = fibonacci(fiboseries);
  console.log(fiboseries);



  // isPalindrom





  function isPalindrom(str){
    let cleanString = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let reverseStr= cleanString.split("").reverse().join("");
    
    return cleanString === reverseStr;
}
let string = "race car"

console.log( isPalindrom (string));





// prime number 
function isPrime(n) {
  // Check if n is less than 2
  if (n <= 1) return false;

  // Check if n is 2
  if (n === 2) return true;

  // Check if n is even
  if (n % 2 === 0) return false;

  // Check for factors up to the square root of n
  const sqrt = Math.sqrt(n);
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  // If no factors were found, n is prime
  return true;
}

// Example usage:
console.log(isPrime(2));   // Output: true
console.log(isPrime(3));   // Output: true
console.log(isPrime(4));   // Output: false
console.log(isPrime(29));  // Output: true  
console.log(isPrime(1));   // Output: false
console.log(isPrime(0));   // Output: false



// Explanation of the Optimized Code
// Immediate Eliminations:

// We first check if n is less than or equal to 1. If so, it's not a prime.
// Next, we check if n is exactly 2, which is the smallest prime number.
// Then, we check if n is an even number greater than 2. If it is, it's not a prime because all even numbers greater than 2 are divisible by 2.
// Loop Until the Square Root:

// We calculate the square root of n using Math.sqrt(n).
// We loop from 3 up to the square root of n, incrementing by 2 each time (to check only odd numbers). This step reduces the number of iterations significantly, as we skip even numbers.
// Inside the loop, we check if n is divisible by i. If we find any factor, we return false immediately, indicating n is not a prime.
// Conclusion:

// If no factors are found up to the square root of n, the function returns true, indicating n is a prime.
// Complexity
// The time complexity of this function is O(√n), which is very efficient for checking the primality of a number. This is because, in the worst case, we only loop up to the square root of n.
