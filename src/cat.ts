import { pet } from "./pet"
export class Cat extends pet{
    constructor(name: string, kesenangan: number, health: number){
        super(name, kesenangan, health);
    }
    suaraKucing(){
        console.log(`${this.name} bersuara meow...`);
    }
}