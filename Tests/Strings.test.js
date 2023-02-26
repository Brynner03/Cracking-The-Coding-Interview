import {isArrayUnique, isPermutation, cleanWhiteSpaces, isPalindromePermutation, oneAway, compressString, rotateMatrix} from '../Data Structures/Strings'
import { describe, it, expect } from 'vitest';


describe('isArrayUnique()', () => {
    it('Should return true if all values in the string are unique', () => {
        const str1 = 'lo'
        const str2 = 'loo'
        const str3 = 'l'

        expect(isArrayUnique(str1)).toEqual(true)
        expect(isArrayUnique(str2)).toEqual(false)
        expect(isArrayUnique(str3)).toEqual(true)
    })
})

describe('isPermutation()', () => {
    it('Should return true if all characters from the first string are equal to the second string', () => {
        const str1 = 'abcd'
        const str2 = 'dabc'

        const str3 = 'buie'

        expect(isPermutation(str1, str2)).toEqual(true)
        expect(isPermutation(str1, str3)).toEqual(false)
    })
})

describe('cleanWhiteSpaces()', () => {
    it('Should replaces all spaces in a string with "%20"', () => {
        const str1 = 'a b c'
        const str2 = 'a%20b%20c'

        expect(cleanWhiteSpaces(str1)).toEqual(str2)
        expect(cleanWhiteSpaces(str1)).toBeTypeOf("string")
    })
})

describe('isPalindromePermutation()', () => {
    it('Should return true if it is a permutation of a palindrome', () => {
        const str1 = "Tact Coa"
        const str2 = "chirpingmermaid"
        const str3 = "aabc"
        const str4 = ""
        expect(isPalindromePermutation(str1)).toEqual(true)
        expect(isPalindromePermutation(str2)).toEqual(false)
        expect(isPalindromePermutation(str3)).toEqual(false)
        expect(isPalindromePermutation(str4)).toEqual(true)
    })
})

describe('oneAway()', () => {
    it('Should return true if there was less than one change between the strings.', () => {
        const str1 = "pale"
        const str2 = 'ple'

        expect(oneAway(str1, str2)).toEqual(true)
    })
    it('Should return false if the strings is not one edit away', () => {
        const str1 = "pale"
        const str2 = "bake"
        expect(oneAway(str1, str2)).toEqual(false)
    })
})

describe('compressString()', () => {
    it('Should compress the strings accordingly.', () => {
        const str1 = "aabcccc"

        expect(compressString(str1)).toEqual("a2b1c4")
    })
    it ('Should return original string if the compressed string is not shorter than the original string.', () => {
        const str2 = "abc"
        expect(compressString(str2)).toEqual("abc")
    })
})

describe('rotateMatrix()', () => {
    it('Should rotate the matrix 90 degrees', () => {
        let arr = [[1,2,3], [4,5,6], [7,8,9]]
        expect(rotateMatrix(arr)).toEqual([[7,4,1], [8,5,2], [9,6,3]])
    })
})