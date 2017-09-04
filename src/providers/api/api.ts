import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiProvider {

  constructor(public http: Http) { }

  url = 'http://localhost:8080/COESIAPI/public/api/v1/';
  url_login = this.url+'autenticacion';

  URL(){ return this.url; }
  URL_Login(){ return this.url_login };
}
