/*
 * Student: Kiefer Hay
 * Student Number: C0391884
 * Title: Introduction to NodeJS
 * Program: Goblin Necromancer
 * Reference: Gobbo's Tales of the Undead Goblins
 */

const deadGoblins = ['Grunk', 'Bonk', 'Zonk', 'Yonk', 'Thunk'];
const treasureTypes = ['gold', 'gems', 'magical trinkets', 'ancient coins', 'cursed artifacts'];

console.log(`
🧌 GOBBO'S TALES OF THE UNDEAD TREASURE 🧌

Deep in the crypts of the Code Caverns, Gobbo discovered an ancient scroll titled "Constructor Functions".
"Hmm," Gobbo muttered, "this looks like a way to bring back dead goblins!" 💀

First, he tried the old way:
${deadGoblins.map(name => `"Rise, ${name}!" *wheeze* *cough*`).join('\n')}
"Ugh, summoning them one by one is making my throat sore!" 😫

But then Gobbo had a brilliant idea! Why summon one goblin at a time when you could use CLASSES? ✨

"EUREKA!" Gobbo screamed, dancing around hiss cauldron of bubbling code. 🧪
"With this magical 'class' spell, I can raise an ARMY of treasure-hunting goblins!"

And that's how Gobbo became the most successful Goblin Necromancer in all the realm,
using classes instead of loops to build his undead army of treasure hunters! 

"Now my minions," Gobbo cackled, "go forth and FIND ME SHINIES!" 💎

Time of summoning: ${new Date().toLocaleTimeString()} ⌛
`);
