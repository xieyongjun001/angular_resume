import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceComponent { }
