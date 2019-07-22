'use strict'

let wins = 0;
let loss = 0;

class Fighter {
    constructor(props = {}) {
        this.props = props;
    }

    getName() {
        return this.props.name;
    }

    getDamage() {
        return this.props.damage;
    }

    getAgility() {
        return this.props.agility;
    }
    getHealth() {
        return this.props.hp;
    }

    heal(amountHP) {
        let totalHP = 120;
        amountHP + this.props.hp > totalHP ? this.props.hp = totalHP : this.props.hp = amountHP + this.props.hp;
        return this.props.hp;
    }

    dealDamage(amountHP) {
        this.props.hp > amountHP ? this.props.hp -= amountHP : this.props.hp = 0;
        return this.props.hp;
    }

    addWin() {
        return wins++;
    }

    addLoss() {
        return loss++;
    }

    attack(defender) {
        let maxAgility = 100;
        let curentAttack = maxAgility - defender.getAgility();
        let isSuccess = Math.round(Math.random() * (maxAgility + 1));
        if (isSuccess > curentAttack) {
            defender.dealDamage(this.props.damage);
            return `${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`;
        } else {
            return `${this.getName()} attack missed`;
        }
    }

    logCombatHistory() {
        return `Name: ${this.getName()}, Wins: ${this.addWin()}, Losses: ${this.addLoss()}`
    }
}

function battle(firstFighter, secondFighter) {
    if (firstFighter.props.hp === 0) {
        return `${firstFighter.getName()} is dead and can't fight.`;
    } else if (secondFighter.props.hp === 0) {
        return `${secondFighter.getName()} is dead and can't fight.`;
    }

    while (firstFighter.props.hp > 0 && secondFighter.props.hp > 0) {
        console.log(firstFighter.attack(secondFighter));
        console.log(secondFighter.attack(firstFighter));
    }

    if (firstFighter.props.hp === 0) {
        firstFighter.addLoss();
        secondFighter.addWin();
    } else {
        secondFighter.addLoss();
        firstFighter.addWin();
    }
}