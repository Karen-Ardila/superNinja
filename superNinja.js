class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName = () => console.log(this.name);
    showStats = () => console.log(`name: ${this.name} strength: ${this.strength} speed: ${this.speed} health: ${this.health}`);
    drinkSake = () => this.health += 10;
}

// const ninja1 = new Ninja("Toto", 20);
// ninja1.sayName();
// ninja1.showStats();

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200)
        this.wisdom = 10;
        this.speed = 10;
        this.strength = 10;
    }
    speakWisdom = () => {
        this.drinkSake();
        console.log("You must treat everyone with respect");
    }
}
const newSensei = new Sensei("Chloe");
newSensei.speakWisdom();
newSensei.showStats();