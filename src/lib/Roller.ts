import { iDice } from "./interfaces/iDice";
import { iRoller } from "./interfaces/iRoller";
import { iRollModifier } from "./interfaces/iRollModifier";
import { iRollResponse } from "./interfaces/iRollResponse";

export class Roller implements iRoller {
  name: string; 
  dice: iDice[];
  mod: iRollModifier;

  constructor(name:string, dice?: Array<iDice>, mod?: iRollModifier) {
    this.name = name; 
    this.dice = dice ? dice : new Array<iDice>();
    this.mod = mod ? mod : {
        name: 'custom-'+name+'-mod',
        description: 'this modifier was constructed by the roller directly',
        mod: 0
    }
  }

  roll(): Promise<iRollResponse> {
    return new Promise<iRollResponse>(() => {
      let response:iRollResponse = {
          roll: 0,
          modifier: this.mod
      }
      let totalRoll = 0;
      this.dice.forEach((dice) => {
        dice.roll().then((result) => {
          totalRoll += result;
        });
      });
      response.roll = totalRoll; 
      return response; 
    })
  }

  setMod(modifier:iRollModifier){
    this.mod = modifier; 
  }

  getDice(){
    return this.dice; 
  }

  addDice(dice:iDice){
    this.dice.push(dice); 
  }

  removeDice(index:number){
    this.dice.splice(index);
  }

  clearDice(){
    this.dice.splice(0, this.dice.length)
  }
}
