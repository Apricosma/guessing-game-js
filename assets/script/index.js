'use strict';

const form = select('form');
const numberOne = select('.number-one');
const numberTwo = select('.number-two');
const btn = select('.get-result');
const output = select('.output p');
const restartNotif = select('.notif-restart');
const clear = select('.reset');
const bgColor = select('body')

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

let win = false;
let count = 1;
let randomValue = randomNumber(1, 100);
console.log(randomValue);

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
            win = true;
            output.innerText = `Congrats! It took you ${count} tries to find my number`;
            restartNotif.innerText = `Please click 'Reset' to try again!`;
            count = 1;
            randomValue = randomNumber(1, 100);
            bgColor.style.backgroundColor = 'var(--app-green)';
            btn.disabled = true;
            btn.style.backgroundColor = 'var(--app-red)';
            clear.style.backgroundColor = 'var(--app-green)';
        }
    } else {
        output.innerText = `Please use a proper, rounded number, goofball`;
    }
});

// reset button functionality
onEvent('click', clear, function() {
    numberOne.value = ``;
    randomValue = randomNumber(1, 100);
    count = 1;
    btn.disabled = false;
    btn.style.backgroundColor = 'var(--app-purple)';
    bgColor.style.backgroundColor = 'var(--app-dark-bg)';
    restartNotif.innerText = ``;
    clear.style.backgroundColor = '#3f3f3f';
    if (win) {
        output.innerText = `You have reset the game`
        win = false;
    } else {
        output.innerText = `You have reset the number. The number was ${randomValue}`;
    }
})