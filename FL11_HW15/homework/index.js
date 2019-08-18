'use strict'

class Hamburger {
    constructor(type, calories, secretIngredient = true) {
        this._type = type;
        this._calories = calories;
        this._secretIngredient = secretIngredient;
        this.cheeseCounter = 0;
        this.tomatoCounter = 0;
        this.secretIngredientCounter = 0;
        this.biteCounter = 0;
        this.hamburger = [];
    }

    get calories() {
        return this._calories;
    }

    set calories(value) {
        this._calories = value;
    }

    addCalories() {
        this._calories += this.ingrediantCalories;
    }

    addSecretIngredient() {
        if (this._secretIngredient || this.secretIngredientCounter === 1) {
            console.log(`Sorry, you can add secret ingredient only once`);
        } else if (this.biteCounter > 0) {
            console.log(`Sorry, you can not add secret ingredient`);
        } else {
            this.addCalories(this.ingrediantCalories = 100);
            this.secretIngredientCounter += 1;
            this.hamburger.push(` with secret ingredient`);
        }
    }

    addCheese() {
        if (this.cheeseCounter === 1) {
            console.log(`Sorry, you can add cheese only once`);
        } else if (this.biteCounter > 0) {
            console.log(`Sorry, you can not add cheese`);
        } else {
            this.addCalories(this.ingrediantCalories = 120);
            this.cheeseCounter += 1;
            this.hamburger.push(` with cheese`);
        }
    }

    addTomato() {
        if (this.tomatoCounter === 2) {
            console.log(`Sorry, you can add tomato only twice`);
        } else if (this.biteCounter > 0) {
            console.log(`Sorry, you can not add tomato`);
        } else {
            this.addCalories(this.ingrediantCalories = 20);
            this.tomatoCounter += 1;
        }
    }

    bite() {
        this.biteCounter += 1;
    }

    info() {
        if (this.tomatoCounter > 1) {
            this.hamburger.push(` with ${this.tomatoCounter} tomato`);
        }
        if (this.biteCounter > 0) {
            this.hamburger.push(` is bit ${this.biteCounter} times`);
        }
        console.log(`${this._type.charAt(0).toUpperCase() + this._type.substr(1)} humburger:${this.hamburger}. Total calories: ${this.calories}.`);
    }
}

const myHamburger = new Hamburger('classic', 600, false);
console.log(myHamburger);
myHamburger.addCheese();
myHamburger.addTomato();
myHamburger.addTomato();
myHamburger.addTomato();
myHamburger.addSecretIngredient();
myHamburger.bite();
myHamburger.bite();
myHamburger.info();