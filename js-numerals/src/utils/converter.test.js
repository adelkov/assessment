import convertToWord from "./converter.js";

describe("Convert number to word", () => {
    test('Zero', () => {
        expect(convertToWord(0)).toBe('zero');
    });
    test('One digit', () => {
        expect(convertToWord(3)).toBe('three');
        expect(convertToWord(7)).toBe('seven');
    });
    test('Two digit till 20', () => {
        expect(convertToWord(11)).toBe('eleven');
        expect(convertToWord(19)).toBe('nineteen');
        expect(convertToWord(10)).toBe('ten');
    });
    test('Two digit non zero', () => {
        expect(convertToWord(54)).toBe('fifty-four');
        expect(convertToWord(96)).toBe('ninety-six');
        expect(convertToWord(33)).toBe('thirty-three');
    });
    test('Two digit with zero', () => {
        expect(convertToWord(20)).toBe('twenty');
        expect(convertToWord(40)).toBe('forty');
    });
    test('Three digit no zero', () => {
        expect(convertToWord(111)).toBe('one hundred eleven');
        expect(convertToWord(123)).toBe('one hundred twenty-three');
        expect(convertToWord(999)).toBe('nine hundred ninety-nine')
    });
    test('Three digit with zero', () => {
        expect(convertToWord(100)).toBe('one hundred');
        expect(convertToWord(507)).toBe('five hundred seven');
    });
    test('Irregular four digit', () => {
        expect(convertToWord(9876)).toBe('ninety-eight hundred and seventy-six');
        expect(convertToWord(1111)).toBe('eleven hundred and eleven');
        expect(convertToWord(2001)).toBe('two thousand and one');
        expect(convertToWord(1999)).toBe('nineteen hundred and ninety-nine');
        expect(convertToWord(1509)).toBe('fifteen hundred and nine');
        expect(convertToWord(2500)).toBe('twenty-five hundred');
        expect(convertToWord(9300)).toBe('ninety-three hundred');
    });
    test('Regular four digit', () => {
        expect(convertToWord(1000)).toBe('one thousand');
        expect(convertToWord(1010)).toBe('one thousand and ten');
    });
    test('Large number', () => {
        expect(convertToWord(9000000000000)).toBe('nine trillion');
        expect(convertToWord(9000000000009)).toBe('nine trillion and nine');
        expect(convertToWord(1001000000)).toBe('one billion and one million');
        expect(convertToWord(1001000001)).toBe('one billion and one million and one');
        expect(convertToWord(1001000001001)).toBe('one trillion and one billion and one thousand and one');
        expect(convertToWord(9009000009033)).toBe('nine trillion and nine billion and nine thousand and thirty-three');
        expect(convertToWord(9119000009033)).toBe('nine trillion and one hundred nineteen billion and nine thousand and thirty-three');
        expect(convertToWord(999999999999999)).toBe('nine hundred ninety-nine trillion and nine hundred ninety-nine billion and nine hundred ninety-nine million and nine hundred ninety-nine thousand and nine hundred ninety-nine');
        expect(convertToWord(987000)).toBe('nine hundred eighty-seven thousand');
        expect(convertToWord(9000001)).toBe('nine million and one');
    });
    test('Negative number', () => {
        expect(convertToWord(-1)).toBe('negative one');
        expect(convertToWord(-10)).toBe('negative ten');
        expect(convertToWord(-9000)).toBe('negative nine thousand');
    });
});
