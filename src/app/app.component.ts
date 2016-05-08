/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig, Router} from '@angular/router-deprecated';
//TODO put back if they confirm pull request for Angular2 RC compatibility
// import {TranslateService} from 'ng2-translate/ng2-translate';

import {Overview} from './overview';

@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [],
  styles: [
    require('normalize.css'),
    require('./app.css')
  ],
  template: require('./app.html')
})
@RouteConfig([
  { path: '/overview', name: 'Overview', component: Overview, useAsDefault: true }
])
export class App {

/*
  constructor(translate: TranslateService) {
    var userLang = navigator.language.split('-')[0];
    translate.setDefaultLang('en');
    translate.use(userLang);
  }
*/

  ngOnInit() {
  }

}
