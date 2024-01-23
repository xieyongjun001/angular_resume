import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component,Input } from '@angular/core';

@Component({
  selector: 'app-socail',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl:'./socail.component.html',
  styleUrl: './socail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocailComponent { 
  @Input() iconsToShow: number[] = [];

  showIcon(iconNumber: number): boolean {
    return this.iconsToShow.includes(iconNumber);
  }
}
