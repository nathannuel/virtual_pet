import * as readline from "readline";
import { Dog } from "./dog";
import { Cat } from "./cat";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Hewan peliharaan apa yang ingin kamu adopsi?\n1: Cat\n2: Dog\nPilihan: ", (jawaban) => {
    const pilihan = jawaban.trim();

    if (pilihan === "1") {
        const kitty = new Cat("Kitty", 100, 100);
        kitty.suara();
    } else if (pilihan === "2") {
        const doggy = new Dog("Doggy", 100, 100);
        doggy.suara();
    } else {
        console.log("Pilihan tidak valid. Masukkan 1 untuk Cat atau 2 untuk Dog.");
    }

    rl.close();
});