import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './aboutme.conponent.html',
  styleUrl: './aboutme.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutmeComponent { }
