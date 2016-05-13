import {Component,  Input, Output,} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
// import { TOOLTIP_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';



@Component({
  selector: 'abc2-label',
  providers: [],
  pipes: [],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  styles: [],
  template: require('./abc2.label.component.html')
})
export class Abc2Label {
  constructor() {
    //The class constructor is called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  }

@Input() auto : string;
@Input() manual : string;


tooltip : string;
label : string;
cssClass : string;



  ngOnChanges(changeRecord) {
    //Called after every change to input properties and before processing content or child views.
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.

    /*
    console.log('----label----');
    console.log(this.auto);
    console.log('M:');
    console.log(this.manual);
    */

    this.tooltip = this.auto;
    this.label = this.manual;

    this.cssClass = 'valami';
  }
  ngDoCheck() {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  }
  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
  }
  ngAfterContentChecked() {
    //Called after every check of the component's or directive's content.
  }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  }
  ngAfterViewChecked() {
    //Called after every check of the component's view. Applies to components only.
  }
  ngOnDestroy() {

    //Called once, before the instance is destroyed.
  }
}
