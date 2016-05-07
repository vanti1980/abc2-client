import {Component} from 'angular2/core';
import {TranslatePipe} from 'ng2-translate/ng2-translate';
import {TreeService} from './tree.service';
import {ApplicationRow} from './tree.model';


@Component({
  selector: 'tree',
  providers: [TreeService],
  directives: [],
  pipes: [TranslatePipe],
  styles: [require('./tree.component.scss')],
  template: require('./tree.component.html')
})
export class Tree {
  apps: Array<ApplicationRow> = new Array<ApplicationRow>();

  constructor(private treeService: TreeService) { }

  ngOnInit() {
    this.treeService.getApplications().subscribe(apps => {
      this.apps = apps;
    });
  }
}
