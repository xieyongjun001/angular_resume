import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component,OnInit } from '@angular/core';
import { Education } from '../../../models/education';
import { ResumeService } from '../../../resume.service';

@Component({
  selector: 'app-educations',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './educations.component.html',
  styleUrl: './educations.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationsComponent implements OnInit {

  myEducation:Education[] = [];
  
  constructor(private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.myEducation = this.resumeService.getEducation();
  }
}
