export class Education {
  fromdate:Date;
  enddate:Date;
  institution:string;
  description:string;
  constructor(fromdate:Date,enddate:Date,institution:string,description:string) { 
    this.fromdate = fromdate;
    this.enddate = enddate;
    this.institution = institution;
    this.description = description;
  }
}
