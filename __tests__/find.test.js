import { firstGrownUp, firstOrange, firstLengthOver5Name } from "../src/find";

describe("array find test", () => {
  // Please add test cases here
    test("findGrownUp: should return true", () => {
        //GIVEN
        const ages = [15, 12, 18, 25, 10];
        const expectedAge = 18;

        //WHEN
        const result = firstGrownUp(ages);

        //THEN
        //console.log(result);
        expect(result).toEqual(expectedAge);
    });

    test("findOrange: should return true", () => {
        //GIVEN
        const fruits = ['apple', 'banana', 'orange', 'grape'];
        const expectedFruit = 'orange';

        //WHEN
        const result = firstOrange(fruits);

        //THEN
        //console.log(result);
        expect(result).toEqual(expectedFruit);
    });

    test("findLengthOver5Name: should return true", () => {
         //GIVEN
         const names = ['Alice', 'Bob', 'Joseph', 'Aubrey'];
         const expectedName = 'Joseph';

         //WHEN
         const result = firstLengthOver5Name(names);

         //THEN
         //console.log(result);
         expect(result).toEqual(expectedName);
    });
});
