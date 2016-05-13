import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import {Address, GeoCodeResponse, Location} from './map.model';

@Injectable()
export class MapService {
  constructor(private http: Http) {

  }

  public getAddresses(): Observable<Array<Address>> {
    var address1 = new Address("test", "1053 Budapest, Szép u. 2"),
        address2 = new Address("test2", "Budapest, Dohány u. 7");
    return Observable.of([address1, address2]);
  }

  public fetchCoordinates(address: Address): Observable<Address> {
    return this.http.get(`${process.env.GEOCODE_SERVICE}?address=${encodeURI(address.address)}&sensor=false`)
      .map((res) => <GeoCodeResponse>res.json())
      .map((geoResp) => { address.location = geoResp.results[0].geometry.location; return address; });
  }

}
