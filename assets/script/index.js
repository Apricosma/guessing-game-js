'use strict';

const form = select('form');
const numberOne = select('.number-one');
const numberTwo = select('.number-two');
const btn = select('.get-result');
const output = select('.output p');
const clear = select('.reset');

// Add event listener
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

// Get HTML element by id
function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}

// Select HTML element by selector
function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function isNumber(str) {
    let input = str.trim();

    if (input.length > 0 && !isNaN(input))
        return true;

    return false;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let count = 1;
let randomValue = randomNumber(1, 100);

// adding an event listener
onEvent('click', btn, function() {
    let a = numberOne.value.trim();
    
    if (isNumber(a)) {
        if (a > randomValue) {
            output.innerText = `Your number is higher than my number`;
            count++;
        } else if (a < randomValue) {
            output.innerText = `Your number is lower than my number`;
            count++;
        } else {
            output.innerText = `Congrats! It took you ${count} tries to find my number`;
            count = 1;
            randomValue = randomNumber(1, 100);
        }
    } else {
        output.innerText = `Please use a proper, rounded number, goofball`;
    }
});

// reset button functionality
onEvent('click', clear, function() {
    output.innerText = `You have reset the number. The number was ${randomValue}`;
    randomValue = randomNumber(1, 100);
    count = 1;
})