export interface iDice{
    sides:number; 
    roll: () => Promise<number>; 
  }