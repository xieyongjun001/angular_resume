import { Injectable } from '@angular/core';
import { Education } from './models/education';
import { Experience } from './models/experience';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private myEducation:Education[] = [];
  private myExperience:Experience[] = [];
  constructor() { 
    this.initEducation();
    this.initExperience();
  }

  private initEducation():void{
    this.myEducation.push(new Education(new Date(2000,9,1),new Date(2003,7,1),"HuNan Railway Tech College","Computer Science"));
    this.myEducation.push(new Education(new Date(2004,9,1),new Date(2006,7,1),"ShangHai Jiaotong Universicty","Communication Technology"));
    this.myEducation.push(new Education(new Date(2023,9,1),new Date(2024,2,9),"Humber College","Full Stack .Net"));
  }

  private initExperience():void{
    this.myExperience.push(new Experience(new Date(2007,9,1),new Date(2010,9,1),"Etang Tech Inc.","Implement our product 'Hompy' features.","ShangHai, China","Senior PHP Developer"));
    this.myExperience.push(new Experience(new Date(2010,9,1),new Date(2014,7,1),"Luce Market Solution Ltd.","Cooper with our market team implement activity pages","Shanghai China","Software Team Leader"));
    this.myExperience.push(new Experience(new Date(2014,9,1),new Date(2022,2,9),"BDL Tech And Network Ltd.","Manage project request and development","Shanghai China","Project Manager"));
    this.myExperience.push(new Experience(new Date(2023,1,1),new Date(),"Sky Tech Ltd.","Develope ERP moduls and IT suppport","Torontao Cananda","Softeware Developer"));
  }

  getEducation():Education[]{
    return this.myEducation;
  }

  getExperience():Experience[]{
    return this.myExperience;
  }

}
