// MIT License

// Copyright (c) 2025 Krzysztof Kalinowski

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.


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
    }
    output.innerHTML = romanNumeral;
});