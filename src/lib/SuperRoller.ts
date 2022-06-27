import { iRoller } from "./interfaces/iRoller";
import { iRollerResponse } from "./interfaces/iRollerResponse";
import { iRollResponse } from "./interfaces/iRollResponse";
import { iSuperRoller } from "./interfaces/iSuperRoller";

export class SuperRoller implements iSuperRoller{
    rollers: iRoller[];
    
    constructor(rollers?: Array<iRoller>){
        this.rollers = rollers ? rollers : new Array<iRoller>()
    }

    roll():Promise<iRollerResponse>{
        return new Promise<iRollerResponse>(()=>{
            let response:iRollerResponse = {
                critical: undefined,
                rawResults: new Array<iRollResponse>(),
                totalResult: 0,
            }
            this.rollers.forEach(roller =>{
                roller.roll().then(result => {
                    response.rawResults.push(result); 
                    response.totalResult+=(result.roll+result.modifier.mod);
                })
            })
            return response; 
        })
    }
}