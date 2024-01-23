import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl:'./contactform.component.html',
  styleUrl: './contactform.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactformComponent { 
  submitted: boolean = false;

  onSubmit(form: NgForm): void {
    console.log(form);
    this.submitted = true;
  }
}
