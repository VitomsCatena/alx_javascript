#!/usr/bin/node

function divideBy (firstNumber) {
    function dividend (secondNumber) {
        return secondNumber / firstNumber;
    }

    return dividend;
}

function addBy (firstNumber) {
    function sum (secondNumber) {
        return firstNumber + secondNumber;
    }
    return sum;
}

const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);
