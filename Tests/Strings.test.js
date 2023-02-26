import {isArrayUnique, isPermutation, cleanWhiteSpaces, isPalindromePermutation, oneAway} from '../Data Structures/Strings'
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
        const str3 = "bake"

        expect(oneAway(str1, str2)).toEqual(true)
        expect(oneAway(str1, str3)).toEqual(false)
    })
})