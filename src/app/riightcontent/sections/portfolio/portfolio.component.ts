import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './portfolio.conponent.html',
  styleUrl: './portfolio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent { }
