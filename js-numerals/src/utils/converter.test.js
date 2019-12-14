import convertToWord from "./converter.js";

describe("Convert number to word", () => {
    test('Zero', () => {
        expect(convertToWord(0)).toBe('zero');
    });
    test('One digit', () => {
        expect(convertToWord(3)).toBe('three');
    });
    test('Two digit till 20', () => {
        expect(convertToWord(11)).toBe('eleven');
        expect(convertToWord(19)).toBe('nineteen');
        expect(convertToWord(10)).toBe('ten');
    });
    test('Two digit non zero', () => {
        expect(convertToWord(54)).toBe('fifty-four');
        expect(convertToWord(96)).toBe('ninety-six')
    });
    test('Two digit with zero', () => {
        expect(convertToWord(20)).toBe('twenty');
        expect(convertToWord(40)).toBe('forty');
    });
    test('Three digit no zero', () => {
        expect(convertToWord(123)).toBe('one hundred twenty-three');
        expect(convertToWord(999)).toBe('nine hundred ninety-nine')
    });
    test('Three digit with zero', () => {
        expect(convertToWord(100)).toBe('one hundred');
        expect(convertToWord(507)).toBe('five hundred seven')
    });
    test('Larger than thousand no zero', () => {
        expect(convertToWord(9876)).toBe('nine thousand and eight hundred seventy-six');
        expect(convertToWord(1111)).toBe('one thousand and one hundred eleven')
    });
    test('Larger than thousand with zero', () => {
        expect(convertToWord(1000)).toBe('one thousand');
        expect(convertToWord(1010)).toBe('one thousand and ten');
        expect(convertToWord(9300)).toBe('nine thousand and three hundred');
        expect(convertToWord(9000001)).toBe('nine million and one');
        expect(convertToWord(987000)).toBe('nine hundred eighty-seven thousand');
    });
    test('Extemely large number', () => {
        expect(convertToWord(9000000000000)).toBe('nine trillion');
        expect(convertToWord(9000000000009)).toBe('nine trillion and nine');
    });
    test('Negative number', () => {
        expect(convertToWord(-10)).toBe('negative ten');
        expect(convertToWord(-9000)).toBe('negative nine thousand');
    });
});

