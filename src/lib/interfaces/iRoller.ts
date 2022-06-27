import { iDice } from './iDice'
import { iRollModifier } from './iRollModifier';
import { iRollResponse } from './iRollResponse';

export interface iRoller{
    name: string;
    dice: Array<iDice>;
    mod: iRollModifier; 
    roll: () => Promise<iRollResponse>;
}