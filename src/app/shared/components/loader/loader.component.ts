import { Component, Input } from '@angular/core';
import { SpinnerType } from 'ngx-ui-loader/lib/utils/types';

@Component({
  selector: 'app-loader',
  template: `
    <ngx-ui-loader
      [loaderId]="loaderId"
      [fgsColor]="'#1976d2'"
      [fgsType]="fgsType"
      [fgsSize]="70"
      [hasProgressBar]="false"
      [overlayColor]="'rgba(255,255,255,0.8)'"
      [text]="text"
      [textColor]="'#1976d2'">
    </ngx-ui-loader>
  `
})
export class LoaderComponent {
  @Input() loaderId: string = 'master';
  @Input() text: string = 'Loading...';
  @Input() fgsType: SpinnerType = 'three-strings';
}
