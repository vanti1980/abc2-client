import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {MapService} from './map.service';
import {Address} from './map.model';

import {
  MapsAPILoader,
  NoOpMapsAPILoader,
  MouseEvent,
  ANGULAR2_GOOGLE_MAPS_PROVIDERS,
  ANGULAR2_GOOGLE_MAPS_DIRECTIVES
} from 'angular2-google-maps/core';

@Component({
  selector: 'map',
  providers: [ANGULAR2_GOOGLE_MAPS_PROVIDERS, MapService],
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
  pipes: [],
  styles: [require('./map.component.scss')],
  template: require('./map.component.html')
})
export class Map {
  addresses: Observable<Address[]>;
  hq: Address = new Address("HQ", "Budapest, Szép u. 2", {lat: 47.4933, lng: 19.0578});

  constructor(public mapService: MapService) {

  }

  ngOnInit() {
    this.addresses = this.mapService.getAddresses().flatMap((addr) => addr).flatMap((addr)=> this.mapService.fetchCoordinates(addr)).reduce((ar:Address[], addr:Address)=>{
      ar.push(addr);
      return ar;
    }, new Array<Address>());
  }

}
