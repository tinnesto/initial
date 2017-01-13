import { Component } from '@angular/core';
import { LifecycleComponent } from './lifecycle.component'

@Component({
  selector: 'app-root',
  template: `
    <h1>Root component</h1>
    <fa-lifecycle *ngIf="!delete" [bindable] = "boundValue">
      <p>{{test}}</p>
    </fa-lifecycle>
    <button (click)="delete=true">Click to delete</button>
    <button (click)="test='Changed value'">Click to change</button>
    <button (click)="boundValue= 1002">Click to change content</button>
  `
})
export class AppComponent {
  delete = false;
  test = 'Starting value';
  boundValue = 1000;
}
