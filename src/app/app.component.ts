import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {SidebarComponent } from './sidebar/sidebar.component'
import { RiightcontentComponent } from './riightcontent/riightcontent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,SidebarComponent,RiightcontentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['../assets/lib/slick/slick.css',
            '../assets/lib/slick/slick-theme.css',
            '../assets/lib/lightbox/css/lightbox.min.css'
          ]
})
export class AppComponent {
  title = 'assignment1';
}