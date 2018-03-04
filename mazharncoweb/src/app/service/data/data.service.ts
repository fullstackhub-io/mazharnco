import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { environment } from "../../../environments/environment";

@Injectable()
export class DataService {

  SERVER_URL = environment.api_url;

  constructor(public _http_unsecure: Http) { }

  post(url: string, model: any): Observable<any> {
    let body = JSON.stringify(model);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http_unsecure.post(this.SERVER_URL+url, body, options)
      .map((response: Response) => <any>response.json())
  }

}
