/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = 0(n)
    i++                             // 2 * n = 0(n)
  ) {
    const word = words[i];          // 2 * n = 0(n)
    if (!seen[word]) {              // 5 * n = O(n)
      seen[word] = true;
      unique[unique.length] = word; // 3 * n = O(n)
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = 0(n)
    i++                             // 2 * n = 0(n)
  ) {
    const word = words[i];          // 3 * n = O(n)
    let isUnique = true;            // 1 * n = O(n)
    for (
      let c = 0;                    // 1 * n = O(n)
      c < i;                        // 2 * n^2 = O(n^2)
      c++                           // 2 * n^2 = O(n^2)
    ) {
      const comparing = words[c];   // 2 * n^2 = O(n^2)
      if (comparing === word) {     // 2 * n^2 = O(n^2)
        isUnique = false;           // 1 * n^2 = O(n^2)
      }
    }
    if (isUnique) {                 // 1 * n = O(n) / aka linear time
      unique[unique.length] = word; // 2 * n = O(n)
    }
  }
  return unique;                    // 1 * 1 = O(1) / aka constant time
} // Big O Notation for uniqueQuadratic: O(n^2)
