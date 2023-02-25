
const isArrayUnique = (str) => {
    if (str.length == 1) {
        return true
    }
    
    if (str.length == 0) {
        return false
    }
    
    for (let i = 0; i < str.length; i++) {
        for (let j = 1; j < str.length; j++) {
            if (str[i] !== str[j]) {
                j++
            } else {
                return false
            }
        }
        i++
    }
    return true
}

const isPermutation = (str1, str2) => {

    // Base case
    if (str1.length !== str2.length || str1 == null || str2 == null) {
        return false
    }

    // Get the map of the first string
    let charMap = getMap(str1)

    // Check strB characters and occurrences on the computed map.
    for (let i = 0; i < str1.length; i++) {
        let charB = str2[i]

        if (charMap[charB] !== undefined && charMap[charB] >= 1) {
            charMap[charB] --
        } else {
            return false
        }
    }
    return true
}

const getMap = (str) => {
    let map = {}

    for (let i = 0 ; i < str.length; i++) {
        let currentChar = str[i]

        if (!map[currentChar]) {
            map[currentChar] = 1
        } else {
            map[currentChar] += 1
        }
    }
    return map
}

// URLify

const cleanWhiteSpaces = (str) => {

    let cleanedString = str.replace(/\s/g, '%20')
    return cleanedString
}

// Palindrome Permutaion

const isPalindromePermutation = (str) => {

    let map = {}
    let normString = str.toLowerCase()

    for (let i = 0; i < normString.length; i++) {
        let currentChar = normString[i]
        
        if (currentChar !== ' ') {
            map[currentChar] = map[currentChar] ? map[currentChar] += 1 : 1
        }
    }

    let hasOddFreq = false

    for (const char in map) {
        let freq = map[char]
        if (freq %2 !== 0) {
            if (hasOddFreq) {
                return false
            } else {
                hasOddFreq = true
            }
        }
    }

    return true

}

console.log(isPalindromePermutation("Tact Coa"))
module.exports = {
    isArrayUnique,
    isPermutation,
    cleanWhiteSpaces,
    isPalindromePermutation
}