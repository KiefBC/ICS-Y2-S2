/*
 * Student: Kiefer Hay
 * Student Number: C0391884
 * Title: Introduction to NodeJS
 * Program: Goblin Loops
 * Reference: Gobbo's Tales of the Goblin Loops
 */
console.log(`
🧌 GOBBO'S TALES OF THE GOBLIN LOOPS 🧌

Once upon a time, there was a goblin named Gobbo who loved numbers.
Every day, Gobbo would count his treasures one by one, but this was very slow.
One day, a wise wizard taught Gobbo about arrays and mapping.
"Why count each coin individually," the wizard said, "when you can count them all at once?"
From that day forward, Gobbo never counted the slow way again.
And that's why goblins prefer map() over for loops!
`);

const goblinArray = Array.from({ length: 100 }).map((_, i) => i * 2);
console.log("Goblin Array:\n", goblinArray);

// Why use For Loops when you can Map?

const slowGoblinArray = [];
for (let i = 0; i < 100; i++) {
    slowGoblinArray.push(i * 2);
}
console.log("Slow Goblin Array:\n", slowGoblinArray);

// for (const goblin of goblinArray) {
//     console.log("Goblin:", goblin);
// }

// for (const goblin of slowGoblinArray) {
//     console.log("Slow Goblin:", goblin);
// }
