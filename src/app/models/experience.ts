import { Education } from "./education";

export class Experience extends Education{
  location:string;
  position:string;

  constructor(fromdate:Date,enddate:Date,institution:string,description:string,location:string,position:string) { 
    super(fromdate, enddate,institution,description);
    this.location = location;
    this.position = position;
  }

}
