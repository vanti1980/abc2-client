import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {ApplicationRow,Zone} from './tree.model';


@Injectable()
export class TreeService {
  constructor(private http: Http) {

  }

  public getApplications():Observable<Array<ApplicationRow>> {
    return this.http.get(`${process.env.SERVER_URL}/applications`).map((res)=><Array<ApplicationRow>>res.json());
  }

  public getZones():Observable<Array<Zone>> {
    return this.http.get(`${process.env.SERVER_URL}/zones`).map((res)=><Array<Zone>>res.json());
  }

}
