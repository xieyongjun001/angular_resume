import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactformComponent } from '../../../widget/contactform/contactform.component'
import { SocailComponent } from '../../../widget/socail/socail.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ContactformComponent,
    SocailComponent
  ],
  templateUrl: './contact.conponent.html',
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent { }
