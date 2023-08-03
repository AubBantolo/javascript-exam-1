import { filterEvenNumbers, filterLengthWith4, filterStartWithA } from '../src/filter';

describe('array filter test', () => {
    // Please add test cases here

    test("filterEvenNumbers: should return true", () => {
        //GIVEN
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];
        const evenNumbers = [2, 4, 6, 8, 10];

        //WHEN
        const result = filterEvenNumbers(numbers);

        //THEN
        //console.log(result);
        expect(result).toEqual(evenNumbers);
    });

    test("filterLengthWith4: should return true", () => {
        //GIVEN
        const inputWords = ['java', 'boot', 'camp', 'itabootcamp'];
        const expectWords = ['java', 'boot', 'camp'];

        //WHEN
        const result = filterLengthWith4(inputWords);

        //THEN
        //console.log(result);
        expect(result).toEqual(expectWords);
    });

    test("filterStartWithA: should return true", () => {
        //GIVEN
        const inputLetters = ['apple', 'banana', 'avocado'];
        const expectLetters = ['apple', 'avocado'];

        //WHEN
        const result = filterStartWithA(inputLetters);

        //THEN
        //console.log(result);
        expect(result).toEqual(expectLetters);
    });
});