/*
 * Student: Kiefer Hay
 * Student Number: C0391884
 * Title: Introduction to NodeJS
 * Program: Goblin Secret Document Thief
 * Reference: Gobbo's Tales of the Goblin Scrolls
 */

import Goblin from "../program5/index.js";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';
import process from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function stealGoblinSecrets() {
    try {
        const args = process.argv.slice(2);
        const fileIn = args[0] || "originalGoblinSecrets.txt";
        const fileOut = args[1] || "goblinIlluminatiSecrets.txt";
        const goblinName = args[2] || "Goblin Illuminati";

        console.log("\n🌙 In the dark of night, a mischievous goblin thief emerges...");

        const masterGoblinScroll = path.join(__dirname, fileOut);
        console.log(`🗞️ ThAe thief clutches an empty scroll labeled "${fileOut}"...`);

        const originalGoblinFile = path.join(__dirname, fileIn);
        const goblinIlluminati = new Goblin(goblinName, Math.floor(Math.random() * 100) + 1, "Sword", Math.floor(Math.random() * 100) + 1);
        
        await fs.writeFile(originalGoblinFile, goblinIlluminati.getGoblin());
        console.log(`📜 The Goblin Illuminati has created their secret document "${fileIn}"...`);

        console.log(`👀 The thief spots the document "${fileIn}" and sneaks closer...`);
        const stolenSecrets = await fs.readFile(originalGoblinFile, "utf8");
        console.log("✨ With magical goblin stealth, they copy the contents...");

        await fs.writeFile(masterGoblinScroll, stolenSecrets);
        console.log(`📝 The stolen secrets are transcribed to "${fileOut}"...`);

        console.log("\n😈 Mwehehehe... The goblin secrets have been stolen! 🗝️");
        console.log("🏃‍♂️ The thief disappears into the shadows...\n");
    } catch (error) {
        console.error("🚫 Oh no! The goblin heist failed:", error);
    }
}

stealGoblinSecrets();
