import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string;
  constructor(public http: HttpClient) {
    this.url = environment.baseRoute;
  }

  post(route: string, headers: HttpHeaders, body: any) {
    return this.http.post((this.url + route).toString(), body, { headers });
  }

  get(route: string,  headers: HttpHeaders) {
    return this.http.get((this.url + route).toString(), { headers });
  }

  put(route: string, headers: HttpHeaders, body: any) {
    return this.http.put((this.url + route).toString(), body, { headers });
  }

  delete(route: string,  headers: HttpHeaders) {
    return this.http.delete((this.url + route).toString(), { headers });
  }
}