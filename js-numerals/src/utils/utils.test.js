import * as utils from "./utils.js";

describe("Helper functions", () => {
    test('Get digit at given denom', () => {
        expect(utils.getDigitAtDenom(1000, 10)).toBe(100);
        expect(utils.getDigitAtDenom(200, 10)).toBe(20);
        expect(utils.getDigitAtDenom(1900, 100)).toBe(19);
        expect(utils.getDigitAtDenom(0, 100)).toBe(0);
    });
    test('Number length', () => {
        expect(utils.length( 100)).toBe(3);
        expect(utils.length( 0)).toBe(1);
        expect(utils.length( 9)).toBe(1);
        expect(utils.length( 99999)).toBe(5);
    });
});
