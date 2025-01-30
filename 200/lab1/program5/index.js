/*
 * Student: Kiefer Hay
 * Student Number: C0391884
 * Title: Introduction to NodeJS
 * Program: Goblin Battle
 * Reference: Gobbo's Tales of the Undead Army
 */

console.log(`
🧌 GOBBO'S TALES OF THE UNDEAD ARMY 🧌

After mastering the dark arts of necromancy (see: Constructor Functions),
Gobbo faced a new challenge - commanding his undead horde in battle! 💀

At first, he tried directing each zombie goblin one by one:
"You there! Attack! Now you! Now you!" But this was terribly inefficient.

Then the wise wizard returned with more knowledge:
"Why command each undead goblin individually," the wizard cackled,
"when you can organize them into CLASSES of warriors?" ⚔️

Gobbo's eyes lit up with unholy glee! Using his new Class magic,
he organized his undead minions into proper battle formations.

From that day forward, Gobbo's undead army moved as one,
efficiently conquering dungeons and hoarding treasure!
`);

class Goblin {
    static counter = 0;

    constructor(name, age, weapon, hp = 20) {
        this.name = name;
        this.age = age;
        this.weapon = {
            name: weapon,
            damage: 10
        };
        this.hp = hp;
        this.id = ++Goblin.counter;
    }

    getGoblin() {
        return `Goblin ${this.id}: ${this.name} is ${this.age} years old and wields a ${this.weapon.name}.`;
    }

    attack(target) {
        if (target.hp <= 0) {
            return `${target.name} is already dead!`;
        }

        if (target.hp - this.weapon.damage <= 0) {
            target.hp = 0;
            return `${this.name} kills ${target.name}!`;
        }

        target.hp -= this.weapon.damage;
        return `${this.name} attacks ${target.name} for ${this.weapon.damage} damage!`;
    }

    getHp() {
        return this.hp;
    }

    setWeapon(weapon) {
        this.weapon = {
            name: weapon,
            damage: weapon === "Sword" ? 10 : 15
        };
    }

    setName(name) {
        this.name = name;
    }
}

module.exports = Goblin;

const goblin1 = new Goblin("Gobbo", Math.floor(Math.random() * 100) + 1, "Sword", Math.floor(Math.random() * 100) + 1);
const goblin2 = new Goblin("Oggo", Math.floor(Math.random() * 100) + 1, "Axe", Math.floor(Math.random() * 100) + 1);

console.log(goblin1.getGoblin());
console.log(goblin2.getGoblin());
for (let round = 1; round <= 3; round++) {
    console.log(`\nRound ${round}:`);
    console.log(goblin1.attack(goblin2));
    console.log(goblin2.attack(goblin1));
    console.log(`${goblin1.name}'s HP: ${goblin1.getHp()}`);
    console.log(`${goblin2.name}'s HP: ${goblin2.getHp()}`);
}
