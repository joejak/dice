import { iRoller } from "./iRoller";
import { iRollerResponse } from "./iRollerResponse";

export interface iSuperRoller{
    rollers:Array<iRoller>
    roll: () => Promise<iRollerResponse>; 
}