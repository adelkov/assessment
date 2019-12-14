import * as constants from './constants';


const convertNumeralToWord = number => {
    if (+number === 0) {
        return 'zero'
    }

    let groups = getThreeDigitGroups(number);
    let word = '';
    groups.forEach((number, index) => {
        if (+number !== 0) {
            let toAppend = '';
            toAppend += convertThreeDigit(number);
            if (index !== 0) {
                toAppend += ' ' + constants.DENOM[index] ;
            }
            if (word !== '') {
                toAppend += ' and ';
            }
            word = toAppend + word;
        }
    });

    if (number < 0) {
        word = 'negative ' + word;
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
    if (+number === 0) {
        return '';
    }
    if (number.toString().length === 1) {
        return constants.TO_19[number];
    }
    if (number % 10 === 0) {
        return constants.TENS[number / 10]
    }

    const ten = Math.floor(number / 10);
    const unit = number - ten * 10;

    if (ten === 1) {
        return constants.TO_19[number]
    }

    return constants.TENS[ten] + '-' + constants.TO_19[unit]

};


const convertThreeDigit = number => {
    let word = '';
    if (number.toString().length === 1) {
        return constants.TO_19[number]
    }
    if (number.toString().length === 2) {
        return convertTwoDigit(number);
    }

    const hundred = Math.floor(number / 100);
    word += `${constants.TO_19[hundred]} ${constants.HUNDRED} `;
    word += convertTwoDigit(number - hundred * 100);
    return word;
};

export default convertNumeralToWord;