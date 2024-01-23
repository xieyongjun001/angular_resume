import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<div class="footer">
  <div class="content-inner">
      <div class="row align-items-center">
          <div class="col-md-6">
              <p>© Copyright <a href="https://htmlcodex.com">HTML Codex</a>. All Rights Reserved</p>
          </div>
          <div class="col-md-6">
              <p>Powered by <a href="https://htmlcodex.com">HTML Codex</a></p>
          </div>
      </div>
  </div>
</div>`,
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }
