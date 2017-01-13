import { Component } from '@angular/core';

import { PropertyBindingComponent } from './property-binding.component';
import { EventBindingComponent } from './event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding.component';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  stringInterpolation ='This is string interpolation';
  numberInterpolation = 4;

  onTest() {
  return true;
  }

  onClicked(value: string) {
    alert(value);
  }
}
