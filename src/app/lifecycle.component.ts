import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input
} from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, DoCheck, AfterContentInit,
                                AfterContentChecked, AfterViewInit,
                                AfterViewChecked, OnDestroy, OnInit {

  @Input() bindable = 1000;

  constructor() { }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
   }

  ngOnDestroy() {
  this.log('ngOnDestroy');
  }

  ngOnInit() {
  this.log('ngOnInit');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
