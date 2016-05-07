import {Component} from 'angular2/core';
import {Tree} from './tree';
import {Abc2Label} from './abc2.label';
import {FieldConvertPipe} from './abc2.field';

@Component({
  selector: 'overview',
  providers: [],
  directives: [Tree, Abc2Label],
  pipes: [FieldConvertPipe],
  styles: [require('./overview.component.scss')],
  template: require('./overview.html')
})
export class Overview {

  public fields: string[];

  constructor() { }


  ngOnInit() {
    this.fields = [];
    this.fields[0] = 'id';
    this.fields[1] = 'name';
  }

  getManualEntry(): Object {
    return { id: 11, name: 'manual Nameee' };
  }
  getAutoEntry(): Object {
    return { id: 22, name: 'AUTO Name' };
  }
}
