import { Component } from '@angular/core';
import { DatabindingComponent } from './databinding/databinding.component'

@Component({
  selector: 'app-root',
  template: `
    <h1>Root component</h1>
    <fa-databinding></fa-databinding>
  `
})
export class AppComponent {
  title = 'really interesting';
}
