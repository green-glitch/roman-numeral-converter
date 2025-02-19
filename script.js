const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const convertToRoman = (num) => {
    const romanNumeral = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let roman = '';

    for (let key in romanNumeral) {
        while (num >= romanNumeral[key]) {
            roman += key;
            num -= romanNumeral[key];
        }
    }

    return roman;
}

convertBtn.addEventListener('click', () => {
    let romanNumeral = '';
    if (number.value === '') {
        romanNumeral = 'Please enter a valid number';
    }else if (number.value < 0) {
        romanNumeral = 'Please enter a number greater than or equal to 1';
    }else if (number.value > 3999) {
        romanNumeral = 'Please enter a number less than or equal to 3999';
    } else {
        romanNumeral = convertToRoman(number.value);
        // romanNumeral = number.value;
    }
    output.innerHTML = romanNumeral;
});