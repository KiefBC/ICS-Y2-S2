/*
 * Student: Kiefer Hay
 * Student Number: C0391884
 * Title: Introduction to NodeJS
 * Program:     
 * Reference: Gobbo's Tales of the Goblin Error
 */

console.log(`
🧌 GOBBO'S TALES OF THE GOBLIN ERROR 🧌

Once upon a time, there was a goblin named Gobbo who loved causing mischief.
Every day, Gobbo would sneak into programs and check if they were working properly.
One day, a wise wizard taught Gobbo about throwing errors and exceptions.
"Why let broken code continue," the wizard said, "when you can catch problems early?"
From that day forward, Gobbo became the Error Goblin, guardian of clean code.
And that's why goblins now throw errors instead of letting bugs slip by!
`);

const errorGoblin = () => {
    const random = Math.random();
    if (random > 0.7) {
        throw new Error("\n===\nError Goblin has been summoned!\n===\n");
    }
    return "\n===\nThe Goblin Union found nothing... this time!\n===\n";
};

console.log(errorGoblin());
