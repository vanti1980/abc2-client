import {Component} from 'angular2/core';
import {Tree} from './tree';

@Component({
  selector: 'overview',
  providers: [],
  directives: [Tree],
  pipes: [],
  styles: [require('./overview.component.scss')],
  template: require('./overview.html')
})
export class Overview {
  constructor() { }

  ngOnInit() {
  }
}
