import { iRollModifier } from "./interfaces/iRollModifier";

export class RollModifier implements iRollModifier{
    name: string;
    description?: string | undefined;
    mod: number;
    
    constructor(name:string, mod:number, description?:string){
        this.name = name; 
        this.mod = mod; 
        this.description = description ? description : undefined; 
    }

    setModifier(mod:number){
        this.mod = mod; 
    }

    rename(name:string){
        this.name = name; 
    }

    setDescription(description:string){
        this.description = description; 
    }
}