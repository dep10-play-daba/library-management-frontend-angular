import {UserRole} from "./UserRole";

export class User {
  constructor(
    public userId:number,
    public name:string,
    public address:string,
    public contact:number,
    public role:UserRole,
    ) {
  }
}



