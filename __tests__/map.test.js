import { addSerialNumber, halfNumbers, spliceNames } from "../src/map";

describe("array map test", () => {
  // Please add test cases here
   test("halfNumbers: should return true", () => {
       //GIVEN
       const numbers = [4, 10, 16, 20];
       const expectedHalfNumber = [2, 5, 8, 10];

       //WHEN
       const result = halfNumbers(numbers);

       //THEN
       //console.log(result);
       expect(result).toEqual(expectedHalfNumber);
   });

   test("spliceNames: should return true", () => {
       //GIVEN
       const names = ['Lily', 'Lucy'];
       const spliceName = ['Hello Lily', 'Hello Lucy'];;

       //WHEN
       const result = spliceNames(names);

       //THEN
       //console.log(result);
       expect(result).toEqual(spliceName);
   });

   test("addSerialNumber: should return true", () => {
       //GIVEN
       const fruits = ['apple', 'orange', 'banana'];
       const addSerialNumbers = ['1. apple', '2. orange', '3. banana'];

       //WHEN
       const result = addSerialNumber(fruits);

       //THEN
       //console.log(result);
       expect(result).toEqual(addSerialNumbers);
   });
});
