'use strict'

let play = confirm('Do you want to play a game?');
let max = 8;
const addNumb = 4;
const min = 0;
let userNumb;
let randomInt;
let maxPrize = 100;
const multPrize = 2;
const loss = 0;
let prize = 0;
let totalPrize = 0;

if (!play) {
    alert('You did not become a billionaire, but can.');
} else {
    for (;;) {
        let attempt = 3;
        totalPrize = totalPrize + prize;
        randomInt = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(randomInt);
        for (let j = 0; j < attempt; j += 1) {
            userNumb = +prompt(`Choose a roulette pocket number from 0 to 8
        Attempts left: ${attempt-j}
        Total prize: ${totalPrize}$
        Possible prize on current attempt: ${maxPrize}$`);

            if (userNumb === randomInt && j < attempt) {
                totalPrize = maxPrize;

            } else if (userNumb !== randomInt && j > attempt) {
                totalPrize = loss;
                alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
                confirm('Do you want to play again?');
            }
            maxPrize = maxPrize / multPrize;
        }
        play = confirm(`Congratulation, you won!   Your prize is: ${totalPrize}$. Do you want to continue?`);
        if (!play) {
            alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
            break;
        }
        prize = maxPrize;
        maxPrize = maxPrize * multPrize;
        max += addNumb;
    }

}