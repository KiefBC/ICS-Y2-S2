/*
 * Student: Kiefer Hay
 * Student Number: C0391884
 * Title: Introduction to NodeJS
 * Program: Goblin API
 * Reference: Gobbo's Tales of the Digital Treasure Vault
 */

import axios from 'axios';

async function goblinAPI() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(`
🧌 GOBBO'S TALE OF THE DIGITAL TREASURE VAULT 🧌

Deep in the silicon caves of the Internet, a clever goblin banker named Databonk
discovered a magical API portal! ✨

Databonk peered at the glowing data crystal and exclaimed:
"Ooooh! User ${response.data.userId} has left their treasure marks here!" 💎

He carefully examined the ancient scroll (ID: ${response.data.id}) which contained
a sacred quest titled: "${response.data.title}" 📜

${response.data.completed ? 
    "The quest was COMPLETED! Databonk did a happy dance! 🎉" : 
    "The quest remains UNFINISHED! Databonk shook his head sadly... 😢"}

And so Databonk continued his important work as the keeper of the JSON realm,
carefully guarding each user's digital treasures in his API vault! 🏦
`);
}

goblinAPI();