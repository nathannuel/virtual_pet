import { pet } from "./pet";

export class Dog extends pet{
    constructor(name: string, kesenangan: number, health: number){
        super(name, kesenangan, health);
    }
    suara(){
        console.log(`${this.name} bersuara guk...guk...`);
    }
}