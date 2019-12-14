import * as constants from './constants';


const convertNumeralToWord = number => {
    if (+number === 0) return constants.TO_19[0];
    if (number.toString().length === 4 && Math.floor(number / 100) % 10 !== 0) {
        return convertIrregularFourDigit(number);
    }
    let word = '';
    let groups = getThreeDigitGroups(number);
    groups.forEach((number, index) => {
        let toAppend = '';
        if (+number !== 0) {
            toAppend += convertThreeDigit(number);
            if (index !== 0) {
                toAppend += ' ' + constants.DENOM[index];
            }
            if (word !== '') {
                toAppend += ` ${constants.AND} `;
            }
        }
        word = toAppend + word;
    });

    if (number < 0) {
        word = `${constants.NEGATIVE} ${word}`;
    }
    return word.trim();
};


const getThreeDigitGroups = number => {
    let threeDigitGroups = [];
    let absNumber = Math.abs(number);
    const numOfGroups = Math.ceil(absNumber.toString().length / 3);

    for (let i = 1; i <= numOfGroups; i++) {
        threeDigitGroups.push(absNumber % 1000);
        absNumber = Math.floor(absNumber / 1000)
    }

    return threeDigitGroups;
};

const convertTwoDigit = number => {
    if (+number === 0) return '';
    if (number.toString().length === 1) return constants.TO_19[number];
    if (number % 10 === 0) return constants.TENS[number / 10];

    const ten = Math.floor(number / 10);
    const unit = number - ten * 10;

    if (ten === 1) return constants.TO_19[number];

    return constants.TENS[ten] + '-' + constants.TO_19[unit]
};


const convertThreeDigit = number => {
    const numLength = number.toString().length;
    if (numLength === 1) return constants.TO_19[number];
    if (numLength === 2) return convertTwoDigit(number);


    let word = '';
    const hundred = Math.floor(number / 100);


    word += `${constants.TO_19[hundred]} ${constants.HUNDRED} `;
    word += convertTwoDigit(number - hundred * 100);
    return word;
};

const convertIrregularFourDigit = number => {
    const hundred = Math.floor(number / 100);
    let word = '';
    word += convertTwoDigit(hundred) + " " + constants.HUNDRED;
    const unit = number - hundred * 100;
    if (unit) {
        word += ` and ${convertTwoDigit(unit)} `;
    }
    return word.trim();

};

export default convertNumeralToWord;