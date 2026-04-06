import * as readline from "readline";
import { Dog } from "./dog"
import { Cat } from "./cat" 
//const doggy = new Dog("Doggy", 100, 100)
//console.log(doggy)
//const kitty = new Cat("Kitty", 100, 100)
//console.log(kitty)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function pilihHewan(){
    
    rl.question("Hewan peliharaan apa yang ingin kamu pelihara? \n 1: Anjing \n 2: Kucing \n Pilihan: ", (jawaban) => {
        const pilihan = jawaban.trim();
        if (pilihan === "1") {
            const doggy = new Dog("Doggy", 100, 100);
            doggy.suaraAnjing();
            menu()
        }else if (pilihan === "2") {
            const kitty = new Cat("Kitty", 100, 100);
            kitty.suaraKucing();
            menu()
        }else {
            console.log("Pilihan tidak valid. Silakan pilih 1 untuk Anjing atau 2 untuk Kucing.");
            pilihHewan()
        }
    });
}
function menu(){
    
    rl.question("Apa yang ingin kamu lakukan? \n 1: Memberikan makan \n 2: Mengajak main \n Pilihan: ", (jawaban) => {
        const pilihan = jawaban.trim();
        if (pilihan === "1") {
            console.log("Kamu memberi makan")
            rl.close()
        }else if (pilihan === "2") {
            console.log("Kamu mengajak main")
            rl.close()
        }else {
            console.log("Pilihan tidak valid. Silakan pilih 1 untuk Anjing atau 2 untuk Kucing.");
            menu()
        }
    });
}
pilihHewan()


