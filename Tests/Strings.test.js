import {isArrayUnique, isPermutation, cleanWhiteSpaces} from '../Data Structures/Strings'
import { describe, it, expect } from 'vitest';


describe('isArrayUnique()', () => {
    it('Should return true if all values in the string are unique', () => {
        const str1 = 'lo'
        const str2 = 'loo'
        const str3 = 'l'

        expect(isArrayUnique(str1)).toBeTruthy
        expect(isArrayUnique(str2)).toBeFalsy
        expect(isArrayUnique(str3)).toBeTruthy
    })
})

describe('isPermutation()', () => {
    it('Should return true if all characters from the first string are equal to the second string', () => {
        const str1 = 'abcd'
        const str2 = 'dabc'

        const str3 = 'buie'

        expect(isPermutation(str1, str2)).toBeTruthy
        expect(isPermutation(str1, str3)).toBeFalsy
    })

    describe('cleanWhiteSpaces()', () => {
        it('Should replaces all spaces in a string with "%20"', () => {
            const str1 = 'a b c'
            const str2 = 'a%20b%20c'

            expect(cleanWhiteSpaces(str1)).toEqual(str2)
            expect(cleanWhiteSpaces(str1)).toBeTypeOf("string")
        })
    })
})