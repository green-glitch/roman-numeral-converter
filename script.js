const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

convertBtn.addEventListener('click', () => {
    let romanNumeral = '';
    if (number.value === '') {
        romanNumeral = 'Please enter a valid number';
    }else if (number.value < 0) {
        romanNumeral = 'Please enter a number greater than or equal to 1';
    }else if (number.value > 3999) {
        romanNumeral = 'Please enter a number less than or equal to 3999';
    } else {
        //romanNumeral = convertToRoman(number.value);
        romanNumeral = number.value;
    }
    output.innerHTML = romanNumeral;
});