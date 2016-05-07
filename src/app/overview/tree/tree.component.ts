import {Component} from 'angular2/core';
import {TranslatePipe} from 'ng2-translate/ng2-translate';

@Component({
  selector: 'tree',
  providers: [],
  directives: [],
  pipes: [TranslatePipe],
  styles: [require('./tree.component.scss')],
  template: require('./tree.component.html')
})
export class Tree {
  constructor() { }

  ngOnInit() {
  }
}
