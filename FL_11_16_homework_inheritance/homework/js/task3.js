'use strict'

const Pokemon = function (name, type = 'Fire', specie = 'Flame Pokémon', fly = false) {
    this.name = name;
    this.type = type;
    this.specie = specie;
    this.fly = fly;

    this.getType = function () {
        return this.type;
    }

    this.getSpecie = function () {
        return this.specie;
    }

    this.canFly = function () {
        return this.fly;
    }

    this.getPokemonType = function () {
        return this.name;
    }
}

const Charmander = function () {
    Pokemon.call(this);
    this.name = 'Charmander';
    this.specie = 'Lizard Pokémon';
    this.evolve = function () {
        return new Charmeleon();
    }
}

const Charmeleon = function () {
    Pokemon.call(this);
    this.name = 'Charmeleon';
    this.evolve = function () {
        return new Charizard();
    }
}

const Charizard = function () {
    Pokemon.call(this);
    this.fly = true;
    this.name = 'Charizard';
    this.evolve = function () {
        return this;
    }
}

const Pichu = function () {
    Pokemon.call(this);
    this.name = 'Pichu';
    this.specie = 'Mouse Pokémon';
    this.type = 'Electric';
    this.evolve = function () {
        return new Pikachu();
    }
}

const Pikachu = function () {
    Pokemon.call(this);
    this.name = 'Pikachu';
    this.specie = 'Mouse Pokémon';
    this.type = 'Electric';
    this.evolve = function () {
        return new Raichu();
    }
}

const Raichu = function () {
    Pokemon.call(this);
    this.name = 'Raichu';
    this.specie = 'Mouse Pokémon';
    this.type = 'Electric';
    this.fly = true;
    this.evolve = function () {
        return this;
    }
}

Charmander.prototype = Object.create(Pokemon.prototype);
Charmander.prototype.constructor = Charmander;

Charmeleon.prototype = Object.create(Pokemon.prototype);
Charmeleon.prototype.constructor = Charmeleon;

Charizard.prototype = Object.create(Pokemon.prototype);
Charizard.prototype.constructor = Charizard;


const charmander = new Charmander();
const charmeleon = new Charmeleon();
const charizard = new Charizard();

console.log(charmander.getType());
console.log(charmander.getType() === charmeleon.getType());
console.log(charmeleon.getType() === charizard.getType());

console.log(charmander.evolve().constructor === Charmeleon);
console.log(charmeleon.evolve().constructor === Charizard);

console.log(charmander.getSpecie());
console.log(charmeleon.getSpecie());
console.log(charizard.getSpecie() === charmeleon.getSpecie());

console.log(charmander.canFly());
console.log(charmander.canFly() === charmeleon.canFly());
console.log(charizard.canFly());


Pichu.prototype = Object.create(Pokemon.prototype);
Pichu.prototype.constructor = Pichu;

Pikachu.prototype = Object.create(Pokemon.prototype);
Pikachu.prototype.constructor = Pikachu;

Raichu.prototype = Object.create(Pokemon.prototype);
Raichu.prototype.constructor = Raichu;

const pichu = new Pichu();
console.log(pichu.getPokemonType());

const pikachu = pichu.evolve();
console.log(pikachu.getPokemonType());
console.log(pikachu.constructor === Pikachu);

const raichu = pikachu.evolve();
console.log(raichu.getPokemonType());
console.log(raichu.constructor === Raichu);

const raichu2 = raichu.evolve();
console.log(raichu2 === raichu);