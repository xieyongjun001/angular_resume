import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SocailComponent } from '../widget/socail/socail.component';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,SocailComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent { }
