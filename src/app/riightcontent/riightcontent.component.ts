import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import * as sectioncomponents from './sections';
import { FooterComponent } from '../footer/footer.component'; 

@Component({
  selector: 'app-riightcontent',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    sectioncomponents.EducationsComponent,
    sectioncomponents.AboutmeComponent,
    sectioncomponents.ContactComponent,
    sectioncomponents.ExperienceComponent,
    sectioncomponents.PortfolioComponent,
    sectioncomponents.ReviewComponent,
    sectioncomponents.ServiceComponent,
  ],
  templateUrl: './rightcontent.component.html',
  styleUrl: './riightcontent.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RiightcontentComponent  { }



