import { iRollResponse } from "./iRollResponse";

export interface iRollerResponse{
    totalResult: number; 
    rawResults: Array<iRollResponse>;
    critical: 'FAIL' | 'SUCCESS' | undefined; 
}