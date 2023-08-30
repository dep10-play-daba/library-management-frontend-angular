export class Book {
  constructor(
    public isbn:string,
    public title:string,
    public author:string,
    public rating:number,
    public copies:number,
    public type:string,
    public coverImage:string) {
  }
}
