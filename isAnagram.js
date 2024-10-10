function areAnagrams(str1, str2) {
    // Helper function to clean and sort the string
    const cleanString = (str) =>
      str
        .toLowerCase() // Convert to lowercase
        .replace(/[^a-z0-9]/g, "") // Remove all non-alphanumeric characters
        .split("") // Convert to array of characters
        .sort() // Sort the characters
        .join(""); // Join back to string
  
    // Compare the cleaned, sorted strings
    return cleanString(str1) === cleanString(str2);
  }
  
  // Example usage
  console.log(areAnagrams("listen", "silent")); // true
  console.log(areAnagrams("hello", "billion")); // false
  console.log(areAnagrams("A gentleman", "Elegant man")); // true
  console.log(areAnagrams("Astronomer", "Moon starer")); // true
  
  
  // Explanation
// cleanString Function:

// toLowerCase(): Converts the input string to lowercase to make the comparison case-insensitive.
// replace(/[^a-z0-9]/g, ""): Removes any character that is not a letter or number. This is useful for ignoring spaces, punctuation, and other non-alphanumeric characters.
// split(""): Splits the string into an array of characters.
// sort(): Sorts the characters in alphabetical order.
// join(""): Joins the sorted array back into a single string.
// areAnagrams Function:

// Calls cleanString on both input strings.
// Compares the cleaned and sorted strings using ===. If they are equal, the strings are anagrams.
// Optimized Approach for Performance
// For a more optimized solution, especially for large strings, you can use a frequency counter approach that has a time complexity of O(n), where n is the length of the strings:


function areAnagramsOptimized(str1, str2) {
    const formatString = (str) =>
      str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
    const charCount = (str) => {
      const count = {};
      for (let char of str) {
        count[char] = (count[char] || 0) + 1;
      }
      return count;
    };
  
    const cleanStr1 = formatString(str1);
    const cleanStr2 = formatString(str2);
  
    if (cleanStr1.length !== cleanStr2.length) return false;
  
    const count1 = charCount(cleanStr1);
    const count2 = charCount(cleanStr2);
  
    for (let char in count1) {
      if (count1[char] !== count2[char]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage
  console.log(areAnagramsOptimized("listen", "silent")); // true
  console.log(areAnagramsOptimized("hello", "billion")); // false
  console.log(areAnagramsOptimized("A gentleman", "Elegant man")); // true
  console.log(areAnagramsOptimized("Astronomer", "Moon starer")); // true

//   Explanation of Optimized Approach
// formatString: Cleans the string similar to the first approach.
// charCount: Creates an object (count) to store the frequency of each character.
// cleanStr1 and cleanStr2: Cleaned versions of the input strings.
// Check Lengths: If the cleaned strings do not have the same length, they can't be anagrams.
// Count Comparison: Compares the character frequency counts. If any character has a different count in the two strings, they are not anagrams.
// Conclusion
// Both methods effectively check if two strings are anagrams. The first method is simpler and uses sorting, while the second is more performant with a frequency counter approach. Choose the one that best fits your needs and the size of your input strings.







