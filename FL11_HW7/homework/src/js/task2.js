'use strict'

const addNumb = 4;
const multPrize = 2;
const prizeDiv = 2;
let max = 8;
let randomInt;
let maxPrize = 100;
let prize = 0;
let totalPrize = 0;
let play = confirm('Do you want to play a game?');

if (!play) {
    alert('You did not become a billionaire, but can.');
} else {
    for (;;) {
        let attempt = 3;
        randomInt = Math.floor(Math.random() * (max + 1));
        console.log(randomInt);
        prize = maxPrize;
        for (let i = 0; i < attempt; i += 1) {
            let userNumb = +prompt(`Choose a roulette pocket number from 0 to ${max}
            Attempts left: ${attempt-i}
            Total prize: ${totalPrize}$
            Possible prize on current attempt: ${prize}$`);
            if (userNumb === randomInt) {
                totalPrize += prize;
                play = confirm(`Congratulation, you won! Your prize is: ${totalPrize} $. Do you want to continue?`);
                max += addNumb;
                maxPrize *= multPrize;
                break;
            } else if (userNumb !== randomInt && attempt > 0) {
                prize /= prizeDiv;
            } else if (userNumb !== randomInt && attempt === 0) {
                totalPrize = 0;
                break;
            }
        }
        play = confirm('Do you want to play again?');
        if (!play) {
            alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
            break;
        }
    }
}