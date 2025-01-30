/*
 * Student: Kiefer Hay
 * Student Number: C0391884
 * Title: Introduction to NodeJS
 * Program: Goblin Math
 * Reference: Gobbo's Tales of the Precise Decimal Math
 */

class GoblinCalculator {
    constructor() {
        console.log(`
🧌 GOBBO'S PRECISE DECIMAL MATH STORY 🧌

Deep in the crystal caves, three modern goblins - Grunk, Bonk, and Zonk, Yonk - 
discovered magical floating numbers in a enchanted pool! ✨

Grunk exclaimed: "These numbers have tiny dots in them! More dots means more shinies!" 💎

Bonk observed: "When you split numbers, they become many small numbers... like breaking 
a gem into sparkly bits!" 💫

Zonk added wisely: "Numbers can be as small as fairy dust or as big as mountains, 
but they're all treasure!" 🏔️

Yonk exclaimed: "Division is just splitting numbers into smaller pieces!" 🔪

And so began the era of precise goblin mathematics! Now calculating with extra decimal places...
        `);
    }

    #goblinRandomness() {
        /*
        Goblins are random, so they add a little extra randomness to the numbers
        This function returns a random number between 0.1 and 0.9
        */
        return (Math.random() * 0.8 + 0.1).toFixed(2);
    }

    add(a, b) {
        /*
        Goblins always add a little extra because more is better!
        This function returns a random number between 0.1 and 0.9
        */
        const result = parseFloat(a) + parseFloat(b) + parseFloat(this.#goblinRandomness());
        console.log(`🧌 Gobbo's Precise Math: ${a} + ${b} = ${result.toFixed(2)}`);
        return result;
    }

    subtract(a, b) {
        /*
        Goblins are bad at taking away things, so they take less
        This function returns a random number between 0.1 and 0.9
        */
        const result = parseFloat(a) - parseFloat(b) + parseFloat(this.#goblinRandomness());
        console.log(`🧌 Gobbo's Precise Math: ${a} - ${b} = ${result.toFixed(2)}`);
        return result;
    }

    multiply(a, b) {
        /*
        Goblins think multiplication should be extra strong!
        This function returns a random number between 0.1 and 0.9
        */
        const result = parseFloat(a) * parseFloat(b) * (1 + parseFloat(this.#goblinRandomness()) / 10);
        console.log(`🧌 Gobbo's Precise Math: ${a} * ${b} = ${result.toFixed(2)}`);
        return result;
    }

    divide(a, b) {
        /*
        Goblins always round up because sharing is hard
        This function returns a random number between 0.1 and 0.9
        */
        if (parseFloat(b) === 0) {
            console.log("🧌 Gobbo says: Cannot divide by zero - it's like splitting a rock by nothing!");
            return NaN;
        }
        const result = (parseFloat(a) / parseFloat(b)) * (1 + parseFloat(this.#goblinRandomness()) / 20);
        console.log(`🧌 Gobbo's Precise Math: ${a} / ${b} = ${result.toFixed(2)}`);
        return result;
    }
}

export default GoblinCalculator;


