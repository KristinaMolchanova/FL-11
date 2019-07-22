'use strict'

// let wins = 0;
// let loss = 0;

class Fighter {
    constructor(props = {}) {
        this.props = props;
        this.props.wins = 0;
        this.props.loss = 0;
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
        return this.props.wins++;
    }

    addLoss() {
        return this.props.loss++;
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
        return `Name: ${this.getName()}, Wins: ${this.props.wins}, Losses: ${this.props.loss}`
    }
}

function battle(firstFighter, secondFighter) {
    if (firstFighter.props.hp === 0) {
        return `${firstFighter.getName()} is dead and can't fight.`;
    } else if (secondFighter.props.hp === 0) {
        return `${secondFighter.getName()} is dead and can't fight.`;
    }

    while (firstFighter.props.hp !== 0 && secondFighter.props.hp !== 0) {
        console.log(firstFighter.attack(secondFighter));
        console.log(firstFighter.props.hp);
        console.log(secondFighter.attack(firstFighter));
        console.log(secondFighter.props.hp);
    }

    if (firstFighter.props.hp === 0 && secondFighter.props.hp !== 0) {
        firstFighter.addLoss();
        secondFighter.addWin();
    } else {
        secondFighter.addLoss();
        firstFighter.addWin();
    }
}

const fighter1 = new Fighter({
    name: 'John',
    damage: 40,
    hp: 100,
    agility: 25
});
const fighter2 = new Fighter({
    name: 'Jim',
    damage: 50,
    hp: 120,
    agility: 25
});