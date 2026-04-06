export class pet {
    name : string;
    health : number;
    kesenangan : number;
    constructor(name : string, kesenangan: number, health : number){
        this.name = name;
        this.health = health;
        this.kesenangan = kesenangan;
    }
    makan(porsi : number){
        this.health += porsi;
        this.kesenangan += porsi / 2;
        console.log(`${this.name} makan ${porsi} porsi, kesehatan dan kesenangan bertambah menjadi ${this.health} dan ${this.kesenangan}`);
    }
    suara(){
        console.log(`${this.name} bersuara`);
    }
}