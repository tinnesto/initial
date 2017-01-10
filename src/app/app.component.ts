import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>this should be nice</h1>
    <fa-other></fa-other>
    <fa-another>
      <div>
          <h2>Hello</h2>
          <p>World</p>
      </div>
    </fa-another>
    <fa-another></fa-another>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'really interesting';
}
