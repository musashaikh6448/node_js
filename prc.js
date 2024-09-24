// // function wordCount(text) {
// //     let wordCount = 0;
// //     const words = text.split(/\s+/); // Split text into words using whitespace as separators
  
// //     for (const word of words) {
// //       if (word.trim() !== "") { // Ignore empty strings
// //         wordCount++;
// //       }
// //     }
  
// //     return wordCount;
// //   }
  
// //   // Example usage:
// //   const text = "This is a sample text with multiple words.";
// //   const count = wordCount(text);
// //   console.log("Word count:", count);

// function letterCount(text, letter) {
//     let count = 0;
  
//     for (let i = 0; i < text.length; i++) {
//       if (text[i].toLowerCase() === letter.toLowerCase()) {
//         count++;
//       }
//     }
  
//     return count;
//   }
  
//   // Example usage:
//   const text = "This is a sample text with multiple words.";
//   const letterToCount = "a";
//   const count = letterCount(text, letterToCount);
//   console.log(`Count of letter "${letterToCount}": ${count}`);
//********************************************************************************** */


let twoSum(nums , target):

    hashmap = {}
    
    // # Loop through the list
    for i, num in enumerate(nums):
        complement = target - num
        
        // # Check if the complement is already in the dictionary
        if complement in hashmap:
            return [hashmap[complement], i]
        
        // # Store the index of the current element in the dictionary
        hashmap[num] = i

// # Example usage:
nums1 = [2, 7, 11, 15]
target1 = 9
print(twoSum(nums1, target1)) // # Output: [0, 1]

nums2 = [3, 2, 4]
target2 = 6
print(twoSum(nums2, target2))  //# Output: [1, 2]

nums3 = [3, 3]
target3 = 6
print(twoSum(nums3, target3))  //# Output: [0, 1]
