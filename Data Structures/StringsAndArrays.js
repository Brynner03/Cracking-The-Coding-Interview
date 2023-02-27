const isArrayUnique = (str) => {
  if (str.length == 1) {
    return true;
  }
  if (str.length == 0) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    for (let j = 1; j < str.length; j++) {
      if (str[i] !== str[j]) {
        j++;
      } else {
        return false;
      }
    }
    i++;
  }
  return true;
};

const isPermutation = (str1, str2) => {
  // Base case
  if (str1.length !== str2.length || str1 == null || str2 == null) {
    return false;
  }
  // Get the map of the first string
  let charMap = getMap(str1);
  // Check strB characters and occurrences on the computed map.
  for (let i = 0; i < str1.length; i++) {
    let charB = str2[i];
    if (charMap[charB] !== undefined && charMap[charB] >= 1) {
      charMap[charB]--;
    } else {
      return false;
    }
  }
  return true;
};

const getMap = (str) => {
  let map = {};
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (!map[currentChar]) {
      map[currentChar] = 1;
    } else {
      map[currentChar] += 1;
    }
  }
  return map;
};

// URLify
const cleanWhiteSpaces = (str) => {
  let cleanedString = str.replace(/\s/g, "%20");
  return cleanedString;
};

// Palindrome Permutation
const isPalindromePermutation = (str) => {
  let map = {};
  let normString = str.toLowerCase();
  for (let i = 0; i < normString.length; i++) {
    let currentChar = normString[i];
    if (currentChar !== " ") {
      map[currentChar] = map[currentChar] ? (map[currentChar] += 1) : 1;
    }
  }
  let hasOddFreq = false;
  for (const char in map) {
    let freq = map[char];
    if (freq % 2 !== 0) {
      if (hasOddFreq) {
        return false;
      } else {
        hasOddFreq = true;
      }
    }
  }
  return true;
};

const oneAway = (str1, str2) => {
  const map = {};
  // Loop through the first string and map them
  for (let i = 0; i < str1.length; i++) {
    let currChar = str1[i];
    if (map[currChar]) {
      map[currChar] += 1;
    } else {
      map[currChar] = 1;
    }
  }
  // Loop through the second string and check if it exists in the map.
  // If it does, decrement it.
  // If it doesn't, store the value.
  // If it is equal to 0, remove it from the map.
  for (let j = 0; j < str2.length; j++) {
    let str2Char = str2[j];
    if (map[str2Char]) {
      map[str2Char]--;
    } else {
      map[str2Char] = 1;
    }
    if (map[str2Char] == 0) {
      delete map[str2Char];
    }
  }
  // If the length of values in the map is more than 1, return false.
  if (Object.values(map).length >= 2) {
    return false;
  }
  return true;
};

const compressString = (str) => {
  let compString = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      count++;
    } else {
      compString += str[i] + count;
      count = 1;
    }
  }
  if (str.length <= compString.length) {
    return str;
  } else {
    return compString;
  }
};

const rotateMatrix = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    for (let i = 0; i < right - left; i++) {
      let top = left;
      let bottom = right;
      // Save the top left variable
      let topLeft = arr[top][left + i];
      // Move the bottom left into the top left
      arr[top][left + i] = arr[bottom - i][left];
      // Move bottom right into bottom left
      arr[bottom - i][left] = arr[bottom][right - i];
      // Move top right into bottom right
      arr[bottom][right - i] = arr[top + i][right];
      // Move top left into top right
      arr[top + i][right] = topLeft;
    }
    right--;
    left++;
  }
  return arr;
};

const zeroMatrix = (arr) => {

  let rows = arr.length
  let columns = arr[0].length
  let rowZero = false

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (arr[r][c] == 0) {
        arr[0][c] = 0
        if (r > 0) {
          arr[r][0] = 0
        } else {
          rowZero = true
        }
      }
    }
  }

  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < columns; c++) {
      if (arr[0][c] == 0 || arr[r][0] == 0) {
        arr[r][c] = 0
      }
    }
  }

  if (arr[0][0] == 0) {
    for (let r = 0; r < rows; r++) {
      arr[r][0] = 0
    }
  }

  if (rowZero) {
    for ( let c = 0; c < columns; c++) {
      arr[0][c] = 0
    }
  }
  return arr
}

module.exports = {
  isArrayUnique,
  isPermutation,
  cleanWhiteSpaces,
  isPalindromePermutation,
  oneAway,
  compressString,
  rotateMatrix,
  zeroMatrix
};
