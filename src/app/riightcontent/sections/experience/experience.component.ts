import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component,OnInit } from '@angular/core';
import { Experience } from '../../../models/experience';
import { ResumeService } from '../../../resume.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './experience.conponent.html',
  styleUrl: './experience.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent  implements OnInit {

  myExperience:Experience[] = [];
  
  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.myExperience = this.resumeService.getExperience();
  }
 }



