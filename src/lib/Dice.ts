import { iDice } from "./interfaces/iDice";

export class Dice implements iDice{
    sides: number;
       
    constructor(numSides:number){
        this.sides = numSides; 
    }

    roll():Promise<number>{
        return new Promise<number>(()=>{
           return  Math.floor(Math.random()*1000%this.sides)+1;
        })
    }   
}