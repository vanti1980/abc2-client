import {Component} from '@angular/core';
//TODO put back if they confirm pull request for Angular2 RC compatibility
// import {TranslatePipe} from 'ng2-translate/ng2-translate';
import {TreeService} from './tree.service';
import {ApplicationRow} from './tree.model';


@Component({
  selector: 'tree',
  providers: [TreeService],
  directives: [],
  pipes: [],
  //TODO put back if they confirm pull request for Angular2 RC compatibility
  // pipes: [TranslatePipe],
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
