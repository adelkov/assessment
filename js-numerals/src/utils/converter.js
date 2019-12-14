import * as constants from './constants';


const convertNumeralToWord = number => {

    const groups = getThreeDigitGroups(number);
    console.log(groups);
    return number.toString();
};


const getThreeDigitGroups = number => {
    let threeDigitGroups = [];
    const absNumber = Math.abs(number);
    const numOfGroups = Math.ceil(absNumber.toString().length / 3);

    for (let i = 1; i <= numOfGroups; i++) {
        threeDigitGroups.push(absNumber % 1000);
        absNumber = Math.floor(absNumber / 1000)
    }

    return threeDigitGroups;
};

export default convertNumeralToWord;