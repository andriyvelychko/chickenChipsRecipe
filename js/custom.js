let list = document.querySelector('#ingredients');
let count = list.querySelectorAll('.count');
let meat = document.querySelector('#meat');
let staticMeat = list.querySelector('#static');
let button = document.querySelector('#button');

let obj = {
    0: [4, 'ч.л. чорний перець'],
    1: [1.5, 'ч.л. красний перець'],
    2: [14, 'г. паприка'],
    3: [2, 'ч.л. нітрітна сіль'],
    4: [12, 'зубців часнику'],
    5: [3, 'ч.л. солі'],
    6: [10, 'ст.л. томату'],
    7: [200, 'мл. соєвого соусу'],
}

console.log(obj['0'][0]);

function calcDifferenceMeat(meat, staticMeat) {
    let result;
    let a = Number(meat.value);
    let b = Number(staticMeat.textContent);
    if (b < a) {
        result = (a - b) / b * 100;
        return Math.round(result);

    } else if (b > a) {
        result = (b - a) / b * 100;
        return Math.round(result);
    }
}

function calcBigDifference(number, percent) {
    let result = number * (1 + (percent / 100));
    return result.toFixed(1);
}

function calcSmallerDifference(number, percent) {
    let result = number * (1 - (percent / 100));
    return result.toFixed(1);
}

function buttonClick() {
    if (Number(staticMeat.textContent) < Number(meat.value)) {
        for (let i = 0; i < count.length; i++) {
            console.log(count[i])
            count[i].textContent = calcBigDifference(obj[i][0], calcDifferenceMeat(meat, staticMeat));
        }

    } else if (Number(staticMeat.textContent) > Number(meat.value)) {
        for (let i = 0; i < count.length; i++) {
            console.log(count[i])
            count[i].textContent = calcSmallerDifference(obj[i][0], calcDifferenceMeat(meat, staticMeat));
        }
    }
}

button.addEventListener('click', buttonClick);